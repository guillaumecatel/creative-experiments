import React, { useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

import { Scene } from './luscious-marble'

const LusciousMarble = () => {
  const canvas = useRef<HTMLCanvasElement>(null)

  const handleCanvasClick = () => {
    if (canvas.current) {
      window.open(canvas.current.toDataURL('image/webp', 1), '_blank')
    }
    return false
  }

  return (
    <Canvas
      camera={{ zoom: 0.8 }}
      gl={{ preserveDrawingBuffer: true }}
      onClick={handleCanvasClick}
      ref={canvas}
      style={{ backgroundColor: '#070707', width: '100%', height: '100%' }}
    >
      <Scene />
      <OrbitControls />
    </Canvas>
  )
}

export { LusciousMarble }
