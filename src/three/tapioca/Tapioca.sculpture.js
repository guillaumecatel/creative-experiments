/* eslint-disable no-undef */
import { sculptToThreeJSMesh } from 'shader-park-core'

export default sculptToThreeJSMesh(() => {
  setMaxIterations(3)

  displace(mouse.x * -0.2, mouse.y * -0.2, 0)

  let s = getSpace()
  let r = getRayDirection()
  let n1 = noise(r * 1 + vec3(0, 0.3, time * 0.1))
  let n = noise(s + vec3(0, 0, time * 0.1) + n1)

  metal(n * 0.5 + 0.5)
  shine(n * 0.5 + 0.75)

  color(normal * 0.1 + vec3(5, 0, 0))

  boxFrame(vec3(4), 0.1)
  mixGeo(0)
  sphere(0.25 + n * 0.5)
})
