import { useFrame } from '@react-three/fiber'
import { useMemo, useRef } from 'react'
import { BackSide, ShaderMaterial } from 'three'

import fragmentShader from './Majora.frag?raw'
import vertexShader from './Majora.vert?raw'

const Scene = () => {
  const material = useRef<ShaderMaterial>(null)

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0.0 },
      uResolution: { value: [0, 0, 0, 0] },
    }),
    [],
  )

  useFrame(() => {
    if (material.current) {
      material.current.uniforms.uTime.value += 0.001
    }
  })

  return (
    <>
      <mesh>
        <boxGeometry args={[10, 10, 10]} />
        <shaderMaterial
          fragmentShader={fragmentShader}
          ref={material}
          side={BackSide}
          uniforms={uniforms}
          vertexShader={vertexShader}
        />
      </mesh>
    </>
  )
}

export { Scene }
