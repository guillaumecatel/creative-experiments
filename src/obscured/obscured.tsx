/* eslint-disable react/no-unknown-property */
import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { BoxGeometry, Mesh, ShaderMaterial } from 'three'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { sculptToThreeJSMesh } from 'shader-park-core'

const mesh: Mesh = sculptToThreeJSMesh(`
  let strength = input(0.4, 0, 3);
  let twistMix = input();
  setStepSize(.3);

  rotateY(time * .2);
  let warpedSpace = warpSpace(getSpace());
  metal(1.9);
  shine(1);
  color(0,0,0,0);
  sphere(.75 + length(warpedSpace) * .2);

  function warpSpace(s) {
    let t = time / 4.;
    rotateY(getRayDirection().y * (1 - twistMix) * 12);
    s = getSpace().x * 8.0 * (vec3(0.5, .2, .1) + s);
    for(let i = 1.0; i < 3.0; i += 1.0) {
      s.x = s.x + strength * sin(2.0 * t + i * 1.5 * s.y) + t * 0.5;
      s.y = s.y + strength * cos(2.0 * t + i * 2.5 * s.x);
    }
    return .5 + 0.5 * cos(time + vec3(s.x, s.y, s.x) + vec3(0., 2., 4.));

  }
`)

interface Props {
  scale: number
}

const Scene = ({ scale }: Props) => {
  const el = useRef<Mesh<BoxGeometry, ShaderMaterial>>()

  useFrame(() => {
    if (el.current) {
      el.current.material.uniforms.time.value += 0.1
    }
  })

  return (
    <>
      <color args={['#000000']} attach='background' />
      <primitive object={mesh} ref={el} />
    </>
  )
}

export { Scene }
