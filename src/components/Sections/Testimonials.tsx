import Image from 'next/image'
import React from 'react'

const Testimonials = () => {
    return (
        <div className='md:w-4/5 w-[90%] h-auto flex flex-row items-start justify-between bg-white shadow-2xl p-4 gap-4 px-5 rounded-xl'>
            <div className='w-1/2 h-auto flex items-center justify-center'>
                <div className="w-full h-[600px] overflow-hidden rounded-lg flex p-4">
                    <Image
                        src="/3clims.jpeg"
                        alt="Témoignages"
                        width={1000}
                        height={1000}
                        className='w-full h-full object-cover object-center rounded-lg'
                    />
                </div>
            </div>
            <div className='w-1/2 h-auto flex flex-col items-start justify-start gap-2'>
                <h3 className='text-4xl font-bold'>L'avis de nos clients - Votre confort est notre priorité !</h3>
                {/* <p className='text-sm text-gray-700'> */}
            </div>

        </div>
    )
}

export default Testimonials