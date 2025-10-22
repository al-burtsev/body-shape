import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"

const Contact = () => {
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
            scale: 1,
        })
    }, { scope: sectionRef })

    return (
        <section id="contacts" className="py-19 md:py-38 bg-[image-set(url(/img/contacts/contact-form-bg.jpg)_1x,_url(/img/contacts/contact-form-bg@2x.jpg)_2x)] bg-no-repeat bg-center bg-cover" ref={sectionRef}>
            <div className="container mx-auto max-w-6xl px-4">
                <h2 className="text-accent text-5xl md:text-7xl font-bold tracking-wider w-full md:w-1/2 mb-10 mx-auto">НАПИСАТЬ НАМ</h2>
                <form action="" method="post" className="flex flex-col mx-auto gap-7.5 md:max-w-1/2">
                    <div className="flex flex-col">
                        <label htmlFor="name" className="font-roboto font-bold">Ваше имя</label>
                        <input type="text" id="name" name="name" className="border-b-2 border-b-white/30 font-roboto font-light focus:outline-0 focus:border-b-white" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="email" className="font-roboto font-bold">E-mail</label>
                        <input type="email" id="email" name="email" className="border-b-2 border-b-white/30 font-roboto font-light focus:outline-0 focus:border-b-white" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="message" className="font-roboto font-bold">Сообщение</label>
                        <textarea name="message" id="message" rows={7} className="font-roboto font-light border-b-2 border-b-white/30 focus:outline-0 focus:border-b-white"></textarea>
                    </div>
                    <button type="submit" className="inline-block self-start bg-accent rounded-md text-base/4 tracking-[.25em] text-black text-[19px] px-6 py-3 md:px-12 md:py-4.5 transition duration-400 hover:scale-95">Отправить</button>
                </form>
            </div>
        </section>
    )
}

export default Contact