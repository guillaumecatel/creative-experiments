import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { BoxGeometry, Mesh, ShaderMaterial } from 'three'

import sculpture from './Trance.sculpture'

const Scene = () => {
  const el = useRef<Mesh<BoxGeometry, ShaderMaterial>>(null)

  useFrame(() => {
    if (el.current) {
      el.current.material.uniforms.time.value += 0.025
    }
  })

  return (
    <>
      <color args={['#fff']} attach='background' />
      <primitive object={sculpture} ref={el} scale={1} />
    </>
  )
}

export { Scene }
