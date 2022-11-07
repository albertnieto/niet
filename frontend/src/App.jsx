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

    //background.scene.background = new THREE.Color('0x000000');
    background.scene.fog = new THREE.Fog('0x000000', 1, 100);

    const groundGeometry = new THREE.PlaneGeometry( 100, 100 );
    const groundMaterial = new THREE.MeshPhysicalMaterial({
      color:'0x000000'
    });
    const groundMesh = new THREE.Mesh(groundGeometry, groundMaterial);
    groundMesh.position.y = 0.0;
    groundMesh.rotation.x = - Math.PI / 2;
    groundMesh.receiveShadow = true;

    const material = new THREE.MeshPhysicalMaterial({
      color:'0x121212'
    });

    const glftLoader  = new GLTFLoader();
    glftLoader.load('./src/assets/eixample_trim_small_decimated.glb', (gltfScene) => {
      
      gltfScene.scene.traverse( function ( child ) {
        if ( child.isMesh ) {
            child.material = material;
            child.castShadow = true;
            child.receiveShadow = false;
            child.flatshading = true;
            child.position.y = 0.0
        }
      });

      background.scene.add(groundMesh);
      background.scene.add(gltfScene.scene);

    });

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
