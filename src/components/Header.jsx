import { navLinks } from "../../constants"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const Header = ({ timeline }) => {
  const container = useRef();

  useGSAP(() => {
    gsap.set('li', {
      x: -100,
      autoAlpha: 0,
    });

    timeline
      .fromTo('img', {
        autoAlpha: 0,
        xPercent: -75,
        scale: 0.8,
      }, {
        autoAlpha: 1,
        xPercent: 0,
        scale: 1,
        duration: 0.6,
        ease: "back.inOut(3)",
      })
      .to('li', {
        x: 0,
        stagger: 0.1,
        autoAlpha: 1,
        duration: .6,
        ease: "back.out"
      }, '-=.1')
  }, { dependencies: [timeline], scope: container })

  return (
    <header ref={container}>
      <div className="container mx-auto max-w-6xl px-4">
        <nav>
          <a href="/" className="logo">
            <img
              src="/img/hero/logo.png"
              srcSet='/img/hero/logo@2x.png 2x'
              alt="Body Shape" />
          </a>
          <ul>
            {navLinks.map(({ id, title }) => (<li key={id}><a href={`#${id}`}>{title}</a></li>))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header