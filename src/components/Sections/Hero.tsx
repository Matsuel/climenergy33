import Button from '@/components/Button'
import Intervention from '../Intervention'
import Link from '@/components/Link'
import { MAILTO } from '@/constants/site'

const Hero = () => {
    return (
        <section
            id='hero'
            className='w-full min-h-screen h-auto flex flex-col items-center justify-center gap-3'
        >
            <Intervention />
            <h1 className='text-5xl md:text-8xl font-bold font-Montserrat'>
                ClimEnergy33
            </h1>
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