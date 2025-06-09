import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { BoxGeometry, Mesh, ShaderMaterial } from 'three'

import sculpture from './Obscured.sculpture'

const mesh: Mesh = sculpture

const Scene = () => {
  const el = useRef<Mesh<BoxGeometry, ShaderMaterial>>(null)

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
