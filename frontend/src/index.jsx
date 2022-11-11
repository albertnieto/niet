import { render } from 'react-dom'
import { StrictMode, Suspense } from 'react'
import { Loader } from '@react-three/drei'
import './styles.css'
import App from './App'

render(
    <Suspense fallback={null}>
      <App />
    </Suspense>,
  document.getElementById('root'),
)
