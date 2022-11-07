import { useState } from 'react'
import { useEffect } from 'react'
import * as THREE from 'three'
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

    const boxGeometry = new THREE.BoxGeometry(16, 16, 16);
    const boxMaterial = new THREE.MeshNormalMaterial();
    const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);

    background.scene.add(boxMesh);
  
  }, []);

  return (
    <div>
      <canvas id="background"/>
      <div className="App">
        <h1>Albert Nieto</h1>
      </div>
    </div>
  )
}

export default App
