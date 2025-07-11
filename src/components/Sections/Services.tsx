"use client"
import { SERVICES } from '@/constants/services'
import React, { useState } from 'react'

const Services = () => {

    const [activeService, setActiveService] = useState<number>(0);

    return (
        <div className='md:w-4/5 w-[90%] h-auto flex lg:flex-row flex-col items-stretch justify-center bg-white shadow-2xl p-3 gap-4 px-5 rounded-xl'>
            <div className="flex flex-col w-full lg:w-2/3 gap-4">
                {SERVICES.map((service, index) => (
                    <div key={index} className={`w-full lg:w-1/3 h-auto flex flex-col items-start justify-start gap-4 p-4 ${activeService === index ? 'bg-orange': 'bg-active-orange'} rounded-xl`} onClick={() => setActiveService(index)}>
                        <div className={`w-auto h-auto flex flex-row items-center justify-start gap-2 ${activeService === index ? 'text-white' : 'text-black '}`}>
                            {service.icon}
                            <h3 className={`text-2xl font-bold`}>{service.title}</h3>
                        </div>
                        <p className={`leading-6 ${activeService === index ? 'block' : 'hidden'} text-white`}>{service.description}</p>
                    </div>
                ))}
            </div>
            <div className="hidden lg:flex w-1/3">
                {activeService !== null && (
                    <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center transition-all duration-300">
                        {/* Remplace cette div par une image si besoin */}
                        <span className="text-gray-400">Image du service {activeService + 1}</span>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Services