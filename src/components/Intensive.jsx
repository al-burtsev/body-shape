import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"

const Intensive = () => {
    const sectionRef = useRef();

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: '10% bottom',
                end: 'center center',
                scrub: true,
            },
            duration: .3,
            ease: 'back.inOut'
        });

        tl.fromTo(sectionRef.current, { opacity: 0.5, scale: 0.9 }, {
            autoAlpha: 1,
            xPercent: 0,
            scale: 1.05,
        })
            .to(sectionRef.current, { scale: 1 });
    }, { scope: sectionRef })

    return (
        <section id="intensive"
            ref={sectionRef}
            style={{
                '--clip-top': '10%',
                '--clip-bottom': '90%',
            }}
            className="mb-18 md:mb-37.5 py-30 md:py-60
        bg-[image-set(url(/img/beast/beast-bg.jpg)_1x,_url(/img/beast/beast-bg@2x.jpg)_2x)] bg-no-repeat bg-center [clip-path:polygon(0%_var(--clip-top),100%_0%,100%_var(--clip-bottom),0%_100%)]">
            <div className="container mx-auto max-w-6xl sm:px-4 px-2">
                <h3 className="text-white text-4xl md:text-7xl mb-2 tracking-widest">Режим зверя</h3>
                <p className="font-roboto font-light md:text-2xl mb-4 md:mb-7.5">Ультраинтенсивные тренировки для тех, кто стремится выйти за пределы своих возможностей. Силовые и кардиотренировки высокой интенсивности помогут развить выносливость, мощь и непоколебимую уверенность в себе.</p>
                <a href="#form" className="inline-block bg-accent rounded-md text-base/4 tracking-[.25em] text-black text-[19px] px-6 py-3 md:px-12 md:py-4.5 transition duration-400 hover:scale-95">Записаться</a>
            </div>
        </section>
    )
}

export default Intensive