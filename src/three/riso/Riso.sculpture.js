/* eslint-disable no-undef */
import { sculptToThreeJSMesh } from 'shader-park-core'

export default sculptToThreeJSMesh(() => {
  function gyroid(scale) {
    let s = getSpace()
    s = s * scale

    return dot(sin(s + time * 2), cos(vec3(s.z, s.x, s.y) + time)) / scale
  }

  let scale = input(10, 0, 200)
  setStepSize(0.3)

  let gy = gyroid(scale)
  let s = getRayDirection()
  let n = noise(s * 300 + time + 1) * scale
  let col = gy * n * 0.1

  metal(abs(n) * 2)
  shine(0.2)
  color(vec3(col, 0, 1))
  sphere(0.6)
  expand(gy * 1 + col * 0.5)
})
