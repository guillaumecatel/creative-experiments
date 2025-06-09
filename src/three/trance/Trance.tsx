import { useFrame } from '@react-three/fiber'
import { useMemo, useRef } from 'react'
import { BackSide, ShaderMaterial } from 'three'

import { uniformDescriptionToThreeJSFormat } from '../../utils'

import generated from './Trance.sp'

const Scene = () => {
  const material = useRef<ShaderMaterial>(null)

  const uniforms = useMemo(
    () => uniformDescriptionToThreeJSFormat(generated.uniforms),
    [],
  )

  useFrame(() => {
    if (material.current) {
      material.current.uniforms.time.value += 0.01
    }
  })

  return (
    <>
      <mesh>
        <sphereGeometry args={[12, 12, 12]} />
        <shaderMaterial
          fragmentShader={generated.frag}
          ref={material}
          transparent={true}
          side={BackSide}
          uniforms={uniforms}
          vertexShader={generated.vert}
        />
      </mesh>
    </>
  )
}

export { Scene }
