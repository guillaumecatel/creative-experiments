import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { BoxGeometry, Mesh, ShaderMaterial } from 'three'

import sculpture from './Riso.sculpture'

const Scene = () => {
  const el = useRef<Mesh<BoxGeometry, ShaderMaterial>>(null)

  useFrame(() => {
    if (el.current) {
      el.current.material.uniforms.time.value += 0.075
    }
  })

  return (
    <>
      <color args={['#f5efe6']} attach='background' />
      <primitive object={sculpture} ref={el} />
    </>
  )
}

export { Scene }
