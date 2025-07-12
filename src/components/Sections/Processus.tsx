import { PROCESSUSSTEPS } from '@/constants/processus'
import ProcessusStep from '../ProcessusStep'

const Processus = () => {
    return (
        <div className='md:w-4/5 w-[90%] h-auto flex flex-col items-center justify-center bg-white shadow-2xl p-4 gap-4 px-5 rounded-xl'>
            <h3 className='text-4xl font-bold text-center w-full mb-6'>Votre confort, Notre accompagnement</h3>
            <div className='w-full h-auto flex flex-row items-start justify-start gap-4'>
                {PROCESSUSSTEPS.map((step) => (
                    <ProcessusStep key={step.title} step={step} />
                ))}
            </div>
        </div>
    )
}

export default Processus