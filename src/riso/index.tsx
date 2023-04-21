import React, { useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

import { Scene } from './riso'

interface Props {
  scale: number
}

const Rizo = ({ scale = 5 }: Props) => {
  const canvas = useRef<HTMLCanvasElement>(null)

  const handleCanvasClick = () => {
    if (canvas.current) {
      canvas.current.toBlob(
        (blob) => {
          const link = document.createElement('a')
          link.href = window.URL.createObjectURL(blob as Blob)
          link.download = `${Date.now().toString()}.webp`
          link.click()
        },
        'image/webp',
        1
      )
    }
    return false
  }

  return (
    <Canvas
      camera={{ zoom: 1 }}
      gl={{ preserveDrawingBuffer: true }}
      onDoubleClick={handleCanvasClick}
      ref={canvas}
      style={{ width: '100%', height: '100%' }}
    >
      <Scene scale={scale} />
      <OrbitControls />
    </Canvas>
  )
}

export { Rizo }
