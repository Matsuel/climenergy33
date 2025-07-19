"use client"
import Button from '@/components/Button'
import Link from '@/components/Link'
import { MAILTO } from '@/constants/site'
import { motion } from 'framer-motion'
import Intervention from '../Intervention'

const Hero = () => {
    return (
        <section
            id='hero'
            className='w-full min-h-screen h-auto flex flex-col items-center justify-center gap-4'
        >
            <Intervention />
            <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                className='text-5xl md:text-9xl font-bold font-Montserrat'
            >
                <span className='bg-gradient-to-b from-[#53ACC7] to-[#1D2B47] bg-clip-text text-transparent'>Clim</span>
                <span className='bg-gradient-to-b from-[#E4792D] to-[#CE332C] bg-clip-text text-transparent'>Energy</span>
                <span className='bg-gradient-to-b from-[#53ACC7] to-[#1D2B47] bg-clip-text text-transparent'>3</span>
                <span className='bg-gradient-to-b from-[#E4792D] to-[#CE332C] bg-clip-text text-transparent'>3</span>
            </motion.h1>
            <p className='text-xl mt-4 text-center max-w-full sm:max-w-[80%] md:max-w-[60%] '>
                Nous offrons des solutions complètes d'installation, de maintenance et de dépannage de systèmes sur vos systèmes de climatisation.
            </p>

            <div className='flex items-center justify-center gap-4'>
                <Button variant='primary'>Obtenir un devis</Button>
                <Link href={MAILTO} variant='white' className=''>Contactez-nous</Link>
            </div>
        </section>
    )
}

export default Hero