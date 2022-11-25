/* eslint-disable react/no-unknown-property */
import React, { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { DoubleSide, ShaderMaterial } from 'three'

const vertexShader = /* glsl */ `

  varying vec2 vUv;
  varying vec3 vPosition;

  float PI = 3.1415926535897932384626433832795028;

  void main() {
    vUv = uv;
    vPosition = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`

const fragmentShader = /* glsl */ `

  #ifdef GL_ES
  precision mediump float;
  #endif

  varying vec2 vUv;
  varying vec3 vPosition;
  uniform vec4 uResolution;
  uniform float uTime;

  void main () {

    vec2 uv =  vUv;

    for(float i = 1.0; i < 50.0; i++){
      uv.x += .5 / i * cos(i * 1.5 * uv.y + uTime);
      uv.y += .5 / i * cos(i * 2.5 * uv.x + uTime);
    }

    gl_FragColor = vec4(vec3(0.812,0.243,0.271) / abs(sin(uTime - uv.y - uv.x)), 1.0);
  }
`

const Scene = () => {
  const material = useRef<ShaderMaterial>(null)

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0.0 },
      uResolution: { value: [0, 0, 0, 0] }
    }),
    []
  )

  useFrame(() => {
    if (material.current) {
      material.current.uniforms.uTime.value += 0.01
    }
  })

  return (
    <>
      <mesh>
        <planeGeometry args={[4, 4, 4]} />
        <shaderMaterial
          fragmentShader={fragmentShader}
          ref={material}
          side={DoubleSide}
          uniforms={uniforms}
          vertexShader={vertexShader}
        />
      </mesh>
    </>
  )
}

export { Scene }
