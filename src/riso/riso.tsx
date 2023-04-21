/* eslint-disable react/no-unknown-property */
import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { BoxGeometry, Mesh, ShaderMaterial } from 'three'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { sculptToThreeJSMesh } from 'shader-park-core'

const mesh: Mesh = sculptToThreeJSMesh(`{
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
}`)

interface Props {
  scale: number
}

const Scene = ({ scale }: Props) => {
  const el = useRef<Mesh<BoxGeometry, ShaderMaterial>>()

  useFrame(() => {
    if (el.current) {
      el.current.material.uniforms.time.value += 0.075
      el.current.material.uniforms.scale.value = scale
    }
  })

  return (
    <>
      <color args={['#f5efe6']} attach='background' />
      <primitive object={mesh} ref={el} />
    </>
  )
}

export { Scene }
