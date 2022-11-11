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
} from '@react-three/drei'
import Office from './components/Office'

const deg2rad = degrees => degrees * (Math.PI / 180);

function Camera(props) {
  const ref = useRef()
  const set = useThree((state) => state.set);
  // This makes sure that size-related calculations are proper
  // Every call to useThree will return this camera instead of the default camera 
  useEffect(() => void set({ camera: ref.current }), []);
  useFrame(() => ref.current.updateMatrixWorld());
  return <perspectiveCamera ref={ref} {...props} />
}

export default function App() {
  return (
    <Canvas shadows={true}>
      <OrbitControls />
      <Camera 
        position={[1, 3, 0]} 
        rotation={[deg2rad(30), 0, 0]} 
      />
      <color attach="background" args={['#121212']} />
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
    </Canvas>
  )
}
