import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

import { Scene } from './majora'

const Majora = () => {
  return (
    <Canvas camera={{ zoom: 10 }} style={{ width: '100%', height: '100%' }}>
      <Scene />
      <OrbitControls />
    </Canvas>
  )
}

export { Majora }
