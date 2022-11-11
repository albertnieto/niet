import * as THREE from "three";

import React, { 
  useEffect,
  useRef,
} from "react";

import { 
  Canvas, 
  useThree, 
  useFrame,
  extend, 
} from '@react-three/fiber'

import { 
  OrbitControls, 
  PresentationControls,
  PerspectiveCamera,
  Scroll, 
  ScrollControls,
} from '@react-three/drei'

import Office from './components/Office'
import Html from './components/Html'
import {Camera, CameraMovements} from './components/Camera'

export default function App() {
  return (
    <Canvas shadows={true}>
      <color attach="background" args={['#ffffff']} />
      <Camera 
          position={[0.7, 2, 0]} 
          rotation={[0, 0, 0]} 
      />
      <spotLight 
        position={[1, 3, 0]} 
        angle={0.2} 
        penumbra={0.7}
        intensity={1.5}
        castShadow
        shadow-mapSize-height={512}
        shadow-mapSize-width={512}
      />
      <Office />
      <ScrollControls pages={7}>

        <Scroll>
          <CameraMovements />
        </Scroll>

        <Scroll html>
          <Html />
        </Scroll>

      </ScrollControls>
    </Canvas>
  )
}
