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

const deg2rad = degrees => degrees * (Math.PI / 180);

export function Camera(props) {
  const ref = useRef()
  const set = useThree((state) => state.set);
  // This makes sure that size-related calculations are proper
  // Every call to useThree will return this camera instead of the default camera 
  useEffect(() => void set({ camera: ref.current }), []);
  useFrame(() => ref.current.updateMatrixWorld());
  return <perspectiveCamera ref={ref} {...props} />
}

export function CameraMovements() {
    return (
        <>
            <Camera 
            position={[0.7, 2, 0]} 
            rotation={[0, 0, 0]} 
            />
            <Camera 
            position={[0.7, 3, 0]} 
            rotation={[0, 0, 0]} 
            />
            <Camera 
            position={[0.7, 2, 0]} 
            rotation={[0, 0, 0]} 
            />
            <Camera 
            position={[0.7, 3, 0]} 
            rotation={[0, 0, 0]} 
            />
            <Camera 
            position={[0.7, 2, 0]} 
            rotation={[0, 0, 0]} 
            />
            <Camera 
            position={[0.7, 3, 0]} 
            rotation={[0, 0, 0]} 
            />
            <Camera 
            position={[0.7, 2, 0]} 
            rotation={[0, 0, 0]} 
            />       
        </>
  )
}