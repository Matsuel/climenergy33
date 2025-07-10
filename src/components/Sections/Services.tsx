import { SERVICES } from '@/constants/services'
import React from 'react'

const Services = () => {
    return (
        <div className='md:w-4/5 w-[90%] h-auto flex lg:flex-row flex-col items-center justify-between bg-white shadow-2xl p-3 gap-4 px-5 rounded-xl'>
            {SERVICES.map((service, index) => (
                <div key={index} className='w-full lg:w-1/3 h-auto flex flex-col items-start justify-start gap-4 p-4'>
                    <h3 className='text-2xl font-bold'>{service.title}</h3>
                    <p className='text-gray-500 leading-6'>{service.description}</p>
                    {service.icon}
                </div>
            ))}
        </div>
    )
}

export default Services