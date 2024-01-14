/* eslint-disable react/no-unknown-property */
import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { BoxGeometry, Mesh, ShaderMaterial } from 'three'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { sculptToThreeJSMesh } from 'shader-park-core'

const mesh: Mesh = sculptToThreeJSMesh(`
  let sc = 0.1
  let iterations = 2
  let startScale = 0.5*pow(2, iterations)
  let os = getSpace()

  for (let i = 0; i<iterations; i++) {
    mirrorXYZ()
    displace(sc*startScale,sc*startScale,sc*startScale)
    startScale *= 0.5
  }

  let sp = getSpace()
  let v = smoothstep(nsin(time*10.*length(os) + 5*fractalNoise(30*sp)), .0, 0.25)
  color(v,v*0.2,v*0.1)
  box(sc,sc,sc)
`)

const Scene = () => {
  const el = useRef<Mesh<BoxGeometry, ShaderMaterial>>()

  useFrame(() => {
    if (el.current) {
      el.current.material.uniforms.time.value += 0.025
    }
  })

  return (
    <>
      <color args={['#fff']} attach='background' />
      <primitive object={mesh} ref={el} scale={1} />
    </>
  )
}

export { Scene }
