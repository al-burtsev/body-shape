import { programs } from "../../constants"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"
import { useMediaQuery } from 'react-responsive'

const Programs = () => {
    const sectionRef = useRef();
    const isMobile = useMediaQuery({ maxWidth: 767 });

    const tlSettings = isMobile ? {
        triggerEnd: '75% 25%',
        yPercent: 25,
    } : {
        triggerEnd: 'center center',
        yPercent: 33,
    };


    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 55%',
                end: tlSettings.triggerEnd,
                scrub: 1,
            }
        });

        tl.fromTo('ul li', { opacity: 0.3, yPercent: tlSettings.yPercent, scale: 0.8 }, {
            autoAlpha: 1,
            yPercent: 0,
            scale: 1,
            stagger: {
                amount: 0.2,
                grid: 'auto',
                axis: 'y',
                ease: 'power2.out'
            },
            duration: .1,
        });
    }, { scope: sectionRef })

    return (
        <section id="programs" className="mb-18 md:mb-37.5 overflow-hidden" ref={sectionRef}>
            <div className="container mx-auto max-w-6xl px-4">
                <h2 className="text-accent text-5xl md:text-8xl text-center font-bold tracking-wider w-full md:w-1/2 mx-auto">Программы и&nbsp;секции</h2>
                <p className="text-center font-light font-roboto mb-12.5 text-base/8 w-full md:w-1/2 mx-auto">Разнообразные тренировки и занятия для всех уровней подготовки. Найдите свою идеальную программу и начните путь к здоровью и силе.</p>
                <ul className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-3 sm:gap-4 md:gap-x-8 gap-y-16 md:gap-y-26 justify-items-center">
                    {programs.map(({ id, title, src, srcSet }) => {
                        return (<li key={id} className="relative
                             cursor-text"
                        >
                            <img className="mb-4 md:mb-6 rounded-lg md:rounded-[20px] w-full select-none shadow-[0_4px_15px_0_rgba(0,0,0,0.2)]" src={src} srcSet={srcSet} alt={`Программа ${title}`}
                                draggable="false" />

                            <span className="
                            text-accent
                            text-2xl md:text-4xl
                         tracking-wider
                            ">{title}</span>

                        </li>)
                    })}
                </ul>
            </div>
        </section >
    )
}

export default Programs