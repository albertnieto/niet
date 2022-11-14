import { useThree } from '@react-three/fiber'

function Home() {

}

function About() {

}

function Projects() {

}

function Tools() {

}

function Contact() {

}

function Resume() {

}

function AIArt() {

}

export default function Html() {
  const { width: w, height: h } = useThree((state) => state.viewport)
  return (
    <Scroll html>
      <Home />
      <About />
      <Projects />
      <Tools />
      <Contact />
      <Resume />
      <AIArt />
    </Scroll>
  )
}