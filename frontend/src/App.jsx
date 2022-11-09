import { useState } from 'react'
import { useEffect } from 'react'
import * as THREE from 'three'

import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';

import { GLTFLoader  } from 'three/examples/jsm/loaders/GLTFLoader.js'

import './App.css'
import InitialScene from './components/threejs/initialScene'

function App() {
  // useState allows functional components to have state
  //const [count, setCount] = useState(0)
  
  // useEffect allows functional components to have lifecycle methods
  useEffect(() => {
    const background = new InitialScene('background');
    background.initialize();
    background.animate();

    //background.scene.background = new THREE.Color('0xffffff');
    //background.scene.fog = new THREE.Fog('0x000000', 0.5, 20);

    //const groundGeometry = new THREE.PlaneGeometry( 100, 23 );
    //const groundMaterial = new THREE.MeshBasicMaterial({
    //  color:'0x000000',
    //});
    //const groundMesh = new THREE.Mesh(groundGeometry, groundMaterial);
    //groundMesh.position.y = 0.0;
    //groundMesh.position.x = 1;
    //groundMesh.position.z = -2.5;
    //groundMesh.rotation.x = - Math.PI / 2;
    //groundMesh.receiveShadow = true;


    // Half a sphere
    //const phiStart = 0;
    //const phiEnd = Math.PI * 2;
    //const thetaStart = 0;
    //const thetaEnd = Math.PI / 2;

    //const sphereGeometry = new THREE.SphereGeometry( 5, 32, 16, phiStart, phiEnd, thetaStart, thetaEnd );
    //const sphereMaterial = new THREE.MeshBasicMaterial( { color: 0x000000} );
    //const sphere = new THREE.Mesh( sphereGeometry, sphereMaterial );
    //background.scene.add( sphere );

    // white spotlight shining from the side, modulated by a texture, casting a shadow

    //let spotLight = new THREE.SpotLight( 0xffffff, 5 );
    //spotLight.position.set( 25, 50, 25 );
    //spotLight.angle = Math.PI / 6;
    //spotLight.penumbra = 1;
    //spotLight.decay = 2;
    //spotLight.distance = 100;

    //spotLight.castShadow = true;
    //spotLight.shadow.mapSize.width = 1024;
    //spotLight.shadow.mapSize.height = 1024;
    //spotLight.shadow.camera.near = 10;
    //spotLight.shadow.camera.far = 200;
    //spotLight.shadow.focus = 1;
    //background.scene.add( spotLight );


    // barcelona

    const material = new THREE.MeshNormalMaterial();
    const glftLoader  = new GLTFLoader();
    glftLoader.load('./src/assets/barcelona_very_small.glb', (gltfScene) => {
      
      gltfScene.scene.traverse( function ( child ) {
        if ( child.isMesh ) {
            child.material = material;
            child.castShadow = true;
            child.receiveShadow = false;
            child.flatshading = true;
            child.position.y = 0.0
        }
      });

      //background.scene.add(groundMesh);
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
