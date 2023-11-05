/* eslint-disable react/no-unknown-property */
import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { BoxGeometry, Mesh, ShaderMaterial } from 'three'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { sculptToThreeJSMesh } from 'shader-park-core'

const mesh: Mesh = sculptToThreeJSMesh(`
  setMaxIterations(3);

  displace(mouse.x*-.2, mouse.y*-.2, 0)

  let s = getSpace();
  let r = getRayDirection();
  let n1 = noise(r*1 + vec3(0, 0.3, time*.1));
  let n = noise(s + vec3(0, 0, time*.1) + n1);

  metal(n*.5 + .5);
  shine(n*.5 + .75);

  color(normal*.1 + vec3(5, 0, 0));

  boxFrame(vec3(4), .1);
  mixGeo(0)
  sphere(.25 + n*.5);
`)

interface Props {
  scale: number
}

const Scene = ({ scale }: Props) => {
  const el = useRef<Mesh<BoxGeometry, ShaderMaterial>>()

  useFrame(() => {
    if (el.current) {
      el.current.material.uniforms.time.value += 0.075
    }
  })

  return (
    <>
      <color args={['#fadbb3']} attach='background' />
      <primitive object={mesh} ref={el} />
    </>
  )
}

export { Scene }
