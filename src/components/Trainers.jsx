import { trainers } from "../../constants"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"
import { useMediaQuery } from 'react-responsive'


const Trainers = () => {
    const isMobile = useMediaQuery({ maxWidth: 767 });

    const tlSettings = isMobile ? {
        triggerEnd: '25% top',
        scrub: 0.6,
        duration: 1,
    } : {
        triggerEnd: 'center top',
        scrub: false,
        duration: 0.6,
    };

    const sectionRef = useRef();

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 55%',
                end: tlSettings.triggerEnd,
                scrub: tlSettings.scrub,
            }
        });

        tl.fromTo('ul li', { autoAlpha: 0, yPercent: -100, scale: 0.8 }, {
            autoAlpha: 1,
            yPercent: 0,
            scale: 1,
            stagger: {
                amount: 0.2,
                grid: 'auto',
                axis: 'y',
                ease: 'power2.out'
            },
            duration: tlSettings.duration,
            ease: 'back.out'
        });
    }, { scope: sectionRef })

    return (
        <section id="trainers" className="mb-18 md:mb-37.5 overflow-hidden" ref={sectionRef}>
            <div className="container mx-auto max-w-6xl px-4">
                <h2 className="text-accent text-5xl md:text-8xl text-center font-bold tracking-wider">Персональные тренера</h2>
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
                            active:opacity-100
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