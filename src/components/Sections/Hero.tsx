import React from 'react'
import Button from '../Button'

const Hero = () => {
    return (
        <section
            id='hero'
            className='w-full min-h-screen h-auto flex flex-col items-center justify-center'
        >
            <h1 className='text-5xl md:text-8xl font-bold font-Montserrat'>
                ClimEnergy33
            </h1>
            <p className='text-xl mt-4 text-center max-w-full sm:max-w-[80%] md:max-w-[60%] '>
                Nous offrons des solutions complètes d'installation, de maintenance et de dépannage de systèmes sur vos systèmes de climatisation.
            </p>

            <Button
                variant='transparent'
            >
                En savoir plus
            </Button>
        </section>
    )
}

export default Hero