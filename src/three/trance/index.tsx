import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useRef } from 'react'

import { Scene } from './Trance'

const Trance = () => {
  const canvas = useRef<HTMLCanvasElement>(null)

  return (
    <Canvas
      camera={{ zoom: 5 }}
      gl={{ preserveDrawingBuffer: true }}
      ref={canvas}
      className='size-full'>
      <Scene />
      <OrbitControls />
    </Canvas>
  )
}

export { Trance }
