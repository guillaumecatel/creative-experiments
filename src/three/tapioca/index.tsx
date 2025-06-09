import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useRef } from 'react'

import { Scene } from './Tapioca'

const Tapioca = () => {
  const canvas = useRef<HTMLCanvasElement>(null)

  return (
    <div className='size-full'>
      <Canvas
        camera={{ zoom: 1 }}
        gl={{ preserveDrawingBuffer: true }}
        ref={canvas}
        className='size-full'>
        <Scene />
        <OrbitControls />
      </Canvas>
    </div>
  )
}

export { Tapioca }
