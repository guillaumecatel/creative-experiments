import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useRef } from 'react'

import { Scene } from './Riso'

const Rizo = () => {
  const canvas = useRef<HTMLCanvasElement>(null)

  return (
    <Canvas
      camera={{ zoom: 1 }}
      gl={{ preserveDrawingBuffer: true }}
      ref={canvas}
      className='size-full'>
      <Scene />
      <OrbitControls />
    </Canvas>
  )
}

export { Rizo }
