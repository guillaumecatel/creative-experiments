import { useFrame } from '@react-three/fiber'
import { useMemo, useRef } from 'react'
import { DoubleSide, ShaderMaterial } from 'three'

import fragmentShader from './MoltenSpectrum.frag?raw'
import vertexShader from './MoltenSpectrum.vert?raw'

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
      material.current.uniforms.uTime.value += 0.01
    }
  })

  return (
    <>
      <mesh>
        <planeGeometry args={[12, 12, 12]} />
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
