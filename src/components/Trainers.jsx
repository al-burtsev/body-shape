import { trainers } from "../../constants"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"

const Trainers = () => {
    const sectionRef = useRef();

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: '10% center',
                end: 'center top',
            }
        });

        tl.fromTo('ul li', { autoAlpha: 0, xPercent: -100, scale: 0.8 }, {
            autoAlpha: 1,
            xPercent: 0,
            scale: 1,
            // stagger: 0.11,
            stagger: {
                // wrap advanced options in an object
                each: 0.2,
                from: 'start',
                grid: [2,2],
                ease: 'power2.inOut',
            },
            duration: .6,
            ease: 'back.out'
        });
    }, { scope: sectionRef })

    return (
        <section id="trainers" className="pt-30" ref={sectionRef}>
            <div className="container mx-auto max-w-6xl sm:px-4 px-2">
                <h2 className="text-accent text-8xl text-center font-bold">Персональные тренера</h2>
                <p className="text-center font-light font-roboto mb-12.5 text-base/8">В нашей команде профессиональные тренеры, которые помогут вам достичь ваших фитнес-целей. Индивидуальный подход, мотивация и поддержка на каждом этапе вашего пути к успеху.</p>
                <ul className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-3 sm:gap-4 md:gap-x-7.5 md:gap-y-8 justify-items-center">
                    {trainers.map(({ id, name, src, srcSet }) => {
                        return (<li key={id} className="relative
                             cursor-text
                             transition-shadow hover:shadow-[0_4px_15px_0_rgba(0,0,0,0.2)]
                        active:shadow-[0_4px_15px_0_rgba(0,0,0,0.2)]"
                        >
                            <span className="
                            absolute inset-0 flex items-center justify-center
                            text-4xl
                            text-center
                            bg-linear-to-b
                            to-black
                            rounded-lg md:rounded-[20px]
                            opacity-0
                            hover:opacity-100
                            transition
                            duration-600
                            ease-out
                            ">{name}</span>
                            <img className="rounded-lg md:rounded-[20px] w-full select-none" src={src} srcSet={srcSet} alt={`Тренер ${name}`}
                                draggable="false" /></li>)
                    })}
                </ul>
            </div>
        </section >
    )
}

export default Trainers