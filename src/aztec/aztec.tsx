/* eslint-disable react/no-unknown-property */
import React, { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { DoubleSide, ShaderMaterial } from 'three'

const vertexShader = /* glsl */ `

  varying vec2 vUv;
  varying vec3 vPosition;

  void main() {
    vUv = uv;
    vPosition = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`

const fragmentShader = /* glsl */ `

  #ifdef GL_ES
  precision highp float;
  #endif

  varying vec2 vUv;
  varying vec3 vPosition;
  uniform vec4 uResolution;
  uniform float uTime;

  float PI = 3.1415926535897932384626433832795028;
  float PI2 = 6.28318530718;

  float ratio = 1.0;

  void main() {
      float x = vUv.x * ratio;
      float y = vUv.y;

      vec2 p = vec2(x, y) - vec2(0.5);

      vec4 col = vec4(0.0);

      vec2 center = vec2(0.0);
      float d = distance(p, center);

      vec2 num = vec2(p);
      float maxit = 0.0;

      for(int i = 0; i < 10; i++){
          //num += cos(num * 4.0 - 1.64 + 0.0001 * uTime);
          num.x += cos(num.x * 2.0 - PI/2.0);
          num.y += cos(num.y * 2.0 - PI/2.0);
          num.x -= 1.0 * cos(num.x * 4.0 - PI/2.0);
          num.y -= 1.0 * cos(num.y * 4.0 - PI/2.0);
          num.x += 1.0 * cos(num.x * 4.0 - PI/2.0 + uTime * PI2);
          num.y += 1.0 * cos(num.y * 4.0 - PI/2.0 + uTime * PI2);
          num *= 0.2 * pow(length(num), 2.0) + 0.01 * length(num);

          if(length(num) > 2.0){
              maxit = float(i);
              break;
          }
    }

    col.rgb += maxit/10.0;

      col.a = 1.0;

      gl_FragColor = col;
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
        <planeGeometry args={[24, 12, 12]} />
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
