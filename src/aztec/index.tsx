import React, { useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

import { Scene } from './aztec'

const Aztec = () => {
  const canvas = useRef<HTMLCanvasElement>(null)

  return (
    <Canvas
      camera={{ zoom: 0.8 }}
      gl={{ preserveDrawingBuffer: true }}
      ref={canvas}
      style={{ backgroundColor: '#070707', width: '100%', height: '100%' }}
    >
      <Scene />
      <OrbitControls />
    </Canvas>
  )
}

export { Aztec }
