import * as THREE from "three";

import React, { useEffect } from "react";
import { Canvas, useThree, extend } from '@react-three/fiber'
import { OrbitControls, PresentationControls } from '@react-three/drei'

import Office from './components/Office'

export default function App() {
  return (
    <Canvas>
      <OrbitControls />
      <color attach="background" args={['#121212']} />
      <spotLight position={[5, 5, 2]} angle={0.15} penumbra={0.3} />
      <Office />
    </Canvas>
  )
}
