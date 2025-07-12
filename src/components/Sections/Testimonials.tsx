import Image from 'next/image'
import React from 'react'
import Testimonial from '../Testimonial'

const Testimonials = () => {
    return (
        <div className='md:w-4/5 w-[90%] h-auto flex flex-row items-start justify-between bg-white shadow-2xl p-4 gap-4 px-5 rounded-xl'>
            <div className='w-1/4 h-auto flex items-center justify-center'>
                <div className="w-full h-[300px] overflow-hidden rounded-lg flex p-4">
                    <Image
                        src="/3clims.jpeg"
                        alt="Témoignages"
                        width={1000}
                        height={1000}
                        className='w-full h-full object-cover object-center rounded-lg'
                    />
                </div>
            </div>
            <div className='w-3/4 h-auto flex flex-col items-start justify-start gap-2'>
                <h3 className='text-4xl font-bold'>L&apos;avis de nos clients - Votre confort est notre priorité !</h3>
                <Testimonial
                    stars={5}
                    text="Un service exceptionnel, je recommande vivement !"
                    author="Jean Dupont"
                />
            </div>
        </div>
    )
}

export default Testimonials