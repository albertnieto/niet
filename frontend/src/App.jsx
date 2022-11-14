import React, { useState, useEffect } from "react";
import { Canvas } from '@react-three/fiber'
import { ScrollControls } from '@react-three/drei'
import Office from './components/Office'
import Html from './components/Html'
import LoadingScreen from './components/Loading'

function OfficeCanvas() {
  return (
    <Canvas shadows={true} camera={{position: [1,2,0]}}>
      <color attach="background" args={['#000000']} />
      <spotLight 
        position={[1, 3, 0]} 
        angle={0.2} 
        penumbra={0.7}
        intensity={1.5}
        castShadow
        shadow-mapSize-height={512}
        shadow-mapSize-width={512}
      />
      
      <ScrollControls pages={7}>
        <Office />
        <Html />
      </ScrollControls>
    </Canvas>
  )
}

export default function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000)
  }, [])

  return (
    loading ? <LoadingScreen /> : <OfficeCanvas />
  )
}
