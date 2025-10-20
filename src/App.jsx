import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger, SplitText } from "gsap/all";
import Hero from './components/Hero'
import Header from './components/Header'
import Trainers from './components/Trainers'
import Intensive from './components/Intensive';

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  const startTl = useRef(gsap.timeline());

  return (
    <>
      <Header timeline={startTl.current} />
      <main>
        <Hero timeline={startTl.current} />
        <Trainers />
        <Intensive />
      </main>
    </>
  )
}

export default App
