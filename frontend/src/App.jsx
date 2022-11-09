import './App.css'
import Barcelona from './components/barcelona'
import { Canvas, useFrame } from '@react-three/fiber'

function App() {
  <Canvas camera={{ position: [0, 0, 0], fov: 40 }}>
    <fog attach="fog" args={['#cc7b32', 0, 500]} />
    <Barcelona ready={ready} />
  </Canvas>
}

export default App
