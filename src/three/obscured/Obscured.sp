let strength = input(0.4, 0, 3)
  let twistMix = input()

  setStepSize(0.3)

  rotateY(time * 0.2)
  let warpedSpace = warpSpace(getSpace())

  metal(1.9)
  shine(1)
  color(0, 0, 0, 0)
  sphere(0.75 + length(warpedSpace) * 0.2)

  function warpSpace(s) {
    let t = time / 4
    rotateY(getRayDirection().y * (1 - twistMix) * 12)
    s = getSpace().x * 8.0 * (vec3(0.5, 0.2, 0.1) + s)
    for (let i = 1.0; i < 3.0; i += 1.0) {
      s.x = s.x + strength * sin(2.0 * t + i * 1.5 * s.y) + t * 0.5
      s.y = s.y + strength * cos(2.0 * t + i * 2.5 * s.x)
    }

    return 0.5 + 0.5 * cos(time + vec3(s.x, s.y, s.x) + vec3(0, 2, 4))
  }
