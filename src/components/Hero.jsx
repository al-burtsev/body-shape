import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hero = ({ timeline }) => {
    useGSAP(() => {
        gsap.set('.hero-logo', {
            xPercent: -100,
            scale: 0.8,
            autoAlpha: 0,
        });

        timeline.to('.hero-logo', {
            xPercent: 0,
            autoAlpha: 1,
            scale: 1,
            rotation: 360,
            duration: .6,
            ease: "back.out"
        }, '<')
    }, [timeline])

    return (
        <section id='hero' className="mb-18 md:mb-37.5">
            <div className="container mx-auto max-w-6xl px-4 w-full flex justify-center md:justify-end items-center">
                <h1 className="sr-only">Body Shape fitness</h1>
                <img className="hero-logo" src="/img/hero/hero-logo.png"
                    srcSet="/img/hero/hero-logo@2x.png 2x"
                    alt="" />
            </div>
        </section>
    )
}

export default Hero