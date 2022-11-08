import { useState } from 'react'
import { useEffect } from 'react'
import * as THREE from 'three'
import { GLTFLoader  } from 'three/examples/jsm/loaders/GLTFLoader.js'
import './App.css'
import InitialScene from './components/threejs/initialScene'

function App() {
  // useState allows functional components to have state
  const [count, setCount] = useState(0)
  
  // useEffect allows functional components to have lifecycle methods
  useEffect(() => {
    const background = new InitialScene('background');
    background.initialize();
    background.animate();


  }, []);

  return (
    <div>
      <canvas id="background">
        <h1>Albert Nieto</h1>
      </canvas>
    </div>
  )
}

export default App
