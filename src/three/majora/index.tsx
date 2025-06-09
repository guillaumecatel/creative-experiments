import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

import { Scene } from './Majora'

const Majora = () => {
  return (
    <Canvas camera={{ zoom: 4 }} className='size-full'>
      <Scene />
      <OrbitControls />
    </Canvas>
  )
}

export { Majora }
