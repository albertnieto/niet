import { useState } from 'react'
import { useEffect } from 'react'
import * as THREE from 'three'
import './App.css'

function App() {
  // useState allows functional components to have state
  const [count, setCount] = useState(0)
  
  // useEffect allows functional components to have lifecycle methods
  useEffect(() => {
    // 1. create scene
    const scene = new THREE.Scene();

    // 2. create camera
    const camera = new THREE.PerspectiveCamera(
      // field of view
      50,
      // aspect ratio
      window.innerWidth / window.innerHeight,
      // near plane
      1,
      // far plane
      1000
    )
    camera.position.z = 96;
    const canvas = document.getElementById('background');
    
    // 3. create renderer, set size and append it to the document
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight)
    document.body.appendChild(renderer.domElement);

    // 4. create light
    // Ambient light globally illuminates all objects in the scene equally
    const ambientLight = new THREE.AmbientLight(0x121212,)
    ambientLight.castShadow = false;
    scene.add(ambientLight);

    // Spot light gets emitted from a single point 
    // in one direction, along a cone that increases 
    // in size the further from the light it gets.
    const spotLight = new THREE.SpotLight(0xffffff, 0.5)
    spotLight.castShadow = true;
    spotLight.position.set(0,64,32);
    scene.add(spotLight);

    // 5. add elements
    const boxGeometry = new THREE.BoxGeometry(16,16,16);
    const boxMaterial = new THREE.MeshNormalMaterial();
    // A 3D mesh is the structural build of a 3D model consisting of polygons
    const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
    scene.add(boxMesh);

    // 6. animate
    const animate = () => {
      renderer.render(scene, camera);
      window.removeEventListener(animate)
    }
    animate();
  
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
