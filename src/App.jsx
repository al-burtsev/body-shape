import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger, SplitText } from "gsap/all";
import Hero from './components/Hero'
import Header from './components/Header'
import Trainers from './components/Trainers'

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  const startTl = useRef(gsap.timeline());
   
  return (
    <main>
      <Header timeline={startTl.current} />
      <Hero timeline={startTl.current} />
      <Trainers />
    </main>
  )
}

export default App
