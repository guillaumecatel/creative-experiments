import React, { useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

import { Scene } from './tapioca'

import NoiseTexture from './noise-texture.svg?url'

interface Props {
  scale: number
}

const Tapioca = ({ scale = 5 }: Props) => {
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
    <div style={{ width: '100vw', height: '100vh', position: 'relative' }}>
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
      <div
        style={{
          opacity: 0.2,
          width: '100%',
          height: '100%',
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          backgroundImage: `url(${NoiseTexture})`
        }}
      ></div>
    </div>
  )
}

export { Tapioca }
