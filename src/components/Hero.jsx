const Hero = () => {
    return (
        <section id='hero'>
            <div className="container mx-auto max-w-6xl sm:px-4 px-2 w-full flex justify-center md:justify-end items-center">
                 <h1 className="sr-only">Body Shape fitness</h1>
                <img src="/img/hero/hero-logo.png" 
                srcSet="/img/hero/hero-logo@2x.png 2x"
                alt="" />
            </div>
        </section>
    )
}

export default Hero