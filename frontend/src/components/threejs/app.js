import * as THREE from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

import fragment from "./shader/fragment.glsl";
import fragment1 from "./shader/fragment1.glsl";
import vertex from "./shader/vertex.glsl";
import vertex1 from "./shader/vertex1.glsl";
import GUI from 'lil-gui'; 

import {DotScreenShader} from './CustomShader';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';


export default class Sketch {
  constructor(options) {
    this.scene = new THREE.Scene();

    this.container = options.dom;
    this.width = this.container.offsetWidth;
    this.height = this.container.offsetHeight;
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    this.renderer.setSize(this.width, this.height);
    this.renderer.setClearColor(0x121212, 1); 
    this.renderer.physicallyCorrectLights = true;
    this.renderer.outputEncoding = THREE.sRGBEncoding;

    this.container.appendChild(this.renderer.domElement);

    this.camera = new THREE.PerspectiveCamera(
      70,
      window.innerWidth / window.innerHeight,
      0.001,
      1000
    );

    this.camera.position.set(0, 0, 1.4);
    //this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.time = 0;

    this.isPlaying = true;
    
    // Define the lights for the scene
    this.light = new THREE.PointLight(0x050505);
    this.light.position.set(0, 0, 15);
    this.scene.add(this.light);
    this.lightAmb = new THREE.AmbientLight(0x121212);
    this.scene.add(this.lightAmb);

    this.mouse = {
      x: 0,
      y: 0
    };

    // Create a circle around the mouse and move it
    // The sphere has opacity 0
    this.mouseGeometry = new THREE.SphereGeometry(1, 100, 100);
    this.mouseMaterial = new THREE.MeshLambertMaterial({});
    this.mouseMesh = new THREE.Mesh(this.mouseGeometry, this.mouseMaterial);

    this.mouseMesh.position.set(0, 0, 0);
    this.scene.add(this.mouseMesh);

    this.addObjects();
    this.initPost()
    this.resize();
    //this.mouseMove();
    this.render();
    //this.mouseMove();
    this.setup();
    //this.settings();
    this.mouseMove();
  }

  settings() {
    let that = this;
    this.settings = {
      progress: 0,
      mRefractionRatio: 1.02,
      mFresnelBias: 0.1,
      mFresnelScale: 4.,
      mFresnelPower: 2.,
    };
    this.gui = new GUI();
    this.gui.add(this.settings, "progress", 0, 1, 0.01);
    this.gui.add(this.settings, "mRefractionRatio", 0, 3, 0.01).onChange(()=>{
      this.mat.uniforms.mRefractionRatio.value = this.settings.mRefractionRatio
    });
    this.gui.add(this.settings, "mFresnelBias", 0, 3, 0.01).onChange(()=>{
      this.mat.uniforms.mFresnelBias.value = this.settings.mFresnelBias
    });
    this.gui.add(this.settings, "mFresnelScale", 0, 3, 0.01).onChange(()=>{
      this.mat.uniforms.mFresnelScale.value = this.settings.mFresnelScale
    });
    this.gui.add(this.settings, "mFresnelPower", 0, 3, 0.01).onChange(()=>{
      this.mat.uniforms.mFresnelPower.value = this.settings.mFresnelPower
    });
  }

  initPost(){
    this.composer = new EffectComposer( this.renderer );
    this.composer.addPass( new RenderPass( this.scene, this.camera ) );

    const effect1 = new ShaderPass( DotScreenShader );
    effect1.uniforms[ 'scale' ].value = 4;
    this.composer.addPass( effect1 );
  }

  setup() {
    window.addEventListener("resize", this.resize.bind(this));
    console.log("mousemove")
    window.addEventListener("mousemove", this.mouseMove.bind(this));
  }

  mouseMove(event) {
    console.log(event)
    event.preventDefault();
    this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
  
    // Make the sphere follow the mouse
    this.vector = new THREE.Vector3(this.mouse.x, this.mouse.y, 0.5);
    this.vector.unproject(this.camera);
    this.dir = this.vector.sub(this.camera.position).normalize();
    this.distance = -this.camera.position.z / this.dir.z;
    this.pos = this.camera.position.clone().add(this.dir.multiplyScalar(this.distance));
    //mouseMesh.position.copy(pos);
  
    this.light.position.copy(new THREE.Vector3(this.pos.x, this.pos.y, this.pos.z + 2));
  }

  resize() {
    this.width = this.container.offsetWidth;
    this.height = this.container.offsetHeight;
    this.renderer.setSize(this.width, this.height);
    this.composer.setSize(this.width, this.height);
    this.camera.aspect = this.width / this.height;
    

    // image cover
    this.imageAspect = 853/1280;
    let a1; let a2;
    if(this.height/this.width>this.imageAspect) {
      a1 = (this.width/this.height) * this.imageAspect ;
      a2 = 1;
    } else{
      a1 = 1;
      a2 = (this.height/this.width) / this.imageAspect;
    }

    this.camera.updateProjectionMatrix();


  }

  addObjects() {

    this.cubeRenderTarget = new THREE.WebGLCubeRenderTarget(256,{
        format: THREE.RGBAFormat,
        generateMipmaps: true,
        minFilter: THREE.LinearMipMapLinearFilter,
        encoding: THREE.sRGBEncoding
      }
    )

    this.cubeCamera = new THREE.CubeCamera(0.1,10,this.cubeRenderTarget)

    let that = this;
    this.material = new THREE.ShaderMaterial({
      extensions: {
        derivatives: "#extension GL_OES_standard_derivatives : enable"
      },
      side: THREE.DoubleSide,
      uniforms: {
        time: { value: 0 },
        resolution: { value: new THREE.Vector4() },
      },
      // wireframe: true,
      // transparent: true,
      vertexShader: vertex,
      fragmentShader: fragment
    });

    this.geometry = new THREE.SphereBufferGeometry(1.5, 32,32);

    this.plane = new THREE.Mesh(this.geometry, this.material);
    this.scene.add(this.plane);




    let geo = new THREE.SphereBufferGeometry(0.4,32,32);
    this.mat = new THREE.ShaderMaterial({
      extensions: {
        derivatives: "#extension GL_OES_standard_derivatives : enable"
      },
      side: THREE.DoubleSide,
      uniforms: {
        time: { value: 0 },
        tCube: { value: 0 },
        mRefractionRatio: {value: 1.02},
        mFresnelBias: {value: 0.1},
        mFresnelScale: {value: 4.},
        mFresnelPower: {value: 2.},
        resolution: { value: new THREE.Vector4() },
      },
      // wireframe: true,
      // transparent: true,
      vertexShader: vertex1,
      fragmentShader: fragment1
    });

    this.smallSphere = new THREE.Mesh(geo,this.mat)
    this.scene.add(this.smallSphere)
  }

  stop() {
    this.isPlaying = false;
  }

  play() {
    if(!this.isPlaying){
      this.isPlaying = true;
      this.render()
    }
  }

  render() {
    if (!this.isPlaying) return;
    this.time += 0.01;
    this.smallSphere.visible = false;
    this.cubeCamera.update(this.renderer,this.scene);
    this.smallSphere.visible = true;
    this.mat.uniforms.tCube.value = this.cubeRenderTarget.texture
    this.material.uniforms.time.value = this.time;
    requestAnimationFrame(this.render.bind(this));
    // this.renderer.render(this.scene, this.camera);
    this.composer.render(this.scene, this.camera);
  }
}

new Sketch({
  dom: document.getElementById("container")
});
