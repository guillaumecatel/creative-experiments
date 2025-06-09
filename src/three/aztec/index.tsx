import { useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

import { Scene } from './Aztec'

const Aztec = () => {
  const canvas = useRef<HTMLCanvasElement>(null)

  return (
    <Canvas
      camera={{ zoom: 0.8 }}
      gl={{ preserveDrawingBuffer: true }}
      ref={canvas}
      className='size-full'>
      <Scene />
      <OrbitControls />
    </Canvas>
  )
}

export { Aztec }
