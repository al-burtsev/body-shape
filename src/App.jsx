import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger, SplitText } from "gsap/all";
import Hero from './components/Hero'
import Header from './components/Header'
import Trainers from './components/Trainers'
import Intensive from './components/Intensive';
import Programs from './components/Programs';
import Footer from './components/Footer';
import Contact from './components/Contact';

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  const startTl = useRef(gsap.timeline());

  return (
    <>
      <Header timeline={startTl.current} />
      <main className='overflow-x-hidden'>
        <Hero timeline={startTl.current} />
        <Trainers />
        <Intensive />
        <Programs />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
