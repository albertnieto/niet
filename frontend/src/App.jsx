import * as THREE from "three";

import React, { useEffect } from "react";
import { Canvas, useThree, extend } from '@react-three/fiber'
import { 
  OrbitControls, 
  PresentationControls,
  PerspectiveCamera
} from '@react-three/drei'

import Office from './components/Office'
import Office2 from './components/Office2'

export default function App() {
  return (
    <Canvas shadows={true}>
      <PerspectiveCamera position={[10, 1, 10]} />
      <OrbitControls />
      <color attach="background" args={['#121212']} />
      <spotLight 
        position={[3, 3, 3]} 
        angle={0.2} 
        penumbra={0.7}
        intensity={1.5}
        castShadow
        shadow-mapSize-height={512}
        shadow-mapSize-width={512}
      />
      <Office />
    </Canvas>
  )
}
