import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

import { Scene } from './luscious-marble'

const LusciousMarble = () => {
  return (
    <Canvas
      camera={{ zoom: 0.8 }}
      style={{ backgroundColor: '#070707', width: '100%', height: '100%' }}
    >
      <Scene />
      <OrbitControls />
    </Canvas>
  )
}

export { LusciousMarble }
