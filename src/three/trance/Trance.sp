let sc = 0.1
let iterations = 2
let startScale = 0.5 * pow(2, iterations)
let os = getSpace()

for (let i = 0; i < iterations; i++) {
  mirrorXYZ()
  displace(sc * startScale, sc * startScale, sc * startScale)
  startScale *= 0.5
}

let sp = getSpace()
let v = smoothstep(
  nsin(time * 10 * length(os) + 5 * fractalNoise(30 * sp)),
  0.0,
  0.25,
)
color(v, v * 0.2, v * 0.1)
box(sc, sc, sc)
