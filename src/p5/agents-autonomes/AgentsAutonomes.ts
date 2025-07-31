import p5 from 'p5'

export const sketch = function (p: p5) {
  // Dimensions du canvas
  const CANVAS_WIDTH = 1080 / 2
  const CANVAS_HEIGHT = 1920 / 2
  // Taille des points dessinés
  const WEIGHT = 1
  // Vitesse d'exécution de l'agent (nombre de pas par frame)
  const SPEED = 1000
  // Probabilité de bifurcation (facteur de branchement)
  const BRANCH_FACTOR = 0.25
  // Facteur de bruit, influence la déviation des trajectoires
  const NOISE_FACTOR = 1
  // Couleurs utilisées pour dessiner les trajectoires
  const COLORS = [
    '#F3D9B1',
    '#D74E09',
    '#FA9D85',
    '#2A2D34',
    '#4F6D7A',
    '#F5E051',
    '#85C0F9',
    '#A31E0F',
    '#847F6F',
    '#E9C46A',
  ]

  let agent

  p.setup = async function () {
    p.createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT)
    p.background('#fff9e7')
    p.noFill()
    p.frameRate(30)

    // Pause de deux secondes
    // await sleep(2000)

    // Création du champ de flux 2D
    const flowField = new FlowField2D(CANVAS_WIDTH, CANVAS_HEIGHT, WEIGHT)

    // Initialisation d'un agent
    agent = new Agent(flowField, BRANCH_FACTOR, NOISE_FACTOR)
  }

  p.draw = async function () {
    if (agent) {
      const color = randomColor()
      p.stroke(color)
      // Exécution de plusieurs étapes de l'agent par frame
      for (let i = 0; i < SPEED; i++) {
        agent.next()
      }
    }
  }

  class FlowField2D {
    private width: number
    private height: number
    private weight: number
    private field: boolean[][]

    constructor(width: number, height: number, weight: number) {
      // Largeur et hauteur du champ
      this.width = width
      this.height = height
      // Taille des points dessinés
      this.weight = weight
      // Grille bidimensionnelle initialisée avec des valeurs "false" (non visité)
      this.field = Array.from({ length: width }, () =>
        Array(height).fill(false),
      )
    }

    // Vérifie si une position (x, y) a été visitée
    hasBeenVisited(x: number, y: number) {
      return this.field[p.floor(x)][p.floor(y)] === true
    }

    // Marque une position (x, y) comme visitée et dessine un point
    set(x: number, y: number) {
      this.field[p.floor(x)][p.floor(y)] = true
      p.circle(x, y, this.weight, this.weight)
    }
  }

  class Agent {
    private flowField: FlowField2D
    private branchFactor: number
    private noiseFactor: number
    private stack: { x: number; y: number; heading: number }[]

    constructor(
      flowField: FlowField2D,
      branchFactor: number,
      noiseFactor: number,
    ) {
      // Initialise les coordonnées de départ aléatoires (x, y) et la direction initiale (heading)
      const x = p.random(p.width),
        y = p.random(p.height),
        heading = 0

      this.flowField = flowField
      this.branchFactor = branchFactor
      this.noiseFactor = noiseFactor
      this.stack = [{ x, y, heading }]

      // Marque la position initiale comme visitée
      this.flowField.set(x, y)
    }

    // Effectue un pas de l'agent dans le champ
    next() {
      // Si la pile est vide, l'agent a terminé
      if (this.stack.length === 0) {
        return false
      }

      // Récupère la dernière position et direction
      const item = this.stack.pop()

      // Détermine le nombre de branches à créer (1 ou 2 selon la probabilité de branchFactor)
      const numBranches = p.random() < this.branchFactor ? 2 : 1

      for (let i = 0; i < numBranches; i++, item.heading += p.PI / 2) {
        // Position x et y temporaires
        let newX = item.x
        let newY = item.y

        do {
          // Calcul du décalage basé sur le bruit Perlin
          const noiseOffset =
            p.noise(newX / p.width, newY / p.height) * this.noiseFactor
          // Nouvelle position x calculée en fonction de la direction et du bruit
          newX = (newX + p.cos(heading + noiseOffset) + p.width) % p.width
          // Nouvelle position y calculée en fonction de la direction et du bruit
          newY = (newY + p.sin(heading + noiseOffset) + p.height) % p.height
        } while (p.floor(newX) === p.floor(x) && p.floor(newY) === p.floor(y))

        // Ignore cette position si elle a déjà été visitée
        if (this.flowField.hasBeenVisited(newX, newY)) {
          continue
        }

        // Ajoute la nouvelle position à la pile
        this.stack.push({ x: newX, y: newY, heading })
        // Marque cette position comme visitée
        this.flowField.set(newX, newY)
      }

      // Retourne true pour indiquer que l'agent continue son exploration
      return true
    }
  }

  function randomColor() {
    return COLORS[p.int(p.random(COLORS.length))]
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms))
  }
}
