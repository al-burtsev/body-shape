import { trainers } from "../../../constants"

const Trainers = () => {
    return (
        <section id="trainers" className="pt-30">
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
                            duration-300
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