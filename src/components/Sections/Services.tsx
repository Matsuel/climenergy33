"use client"

import { SERVICES } from "@/constants/services"
import { useState } from "react"

const Services = () => {

    const [serviceType, setServiceType] = useState<number>(0)

    return (
        <section
            id='services'
            className='w-4/5 min-h-screen h-auto flex flex-col items-start justify-start gap-4'
        >
            <h2 className='text-4xl font-bold mb-6'>Nos Services</h2>
            <h3 className='text-2xl mb-4'>Comment on vous accompagne</h3>

            <div className="flex flex-col gap-4 items-start">
                <div className="flex items-center justify-center gap-2 bg-[#F8F8F8] p-3 rounded-xl">
                    <div className="w-8 h-8 rounded-xl bg-blue-500 flex items-center justify-center text-white text-xl">
                        1
                    </div>
                    <h4 className='text-xl font-semibold'>Vous choisissez le type d'intervention :</h4>
                </div>
                <div className="flex flex-col items-start gap-2">
                    {SERVICES.map((service, index) => (
                        <button key={service.title} className="flex flex-row justify-center items-center" onClick={() => setServiceType(index)}>
                            {service.icon}
                            <span className="mt-2">{service.title}</span>
                        </button>
                    ))}
                </div>
            </div>

            <div className="flex flex-col gap-4 p-3 rounded-xl items-start">
                <div className="flex items-center justify-center gap-2 bg-[#F8F8F8] p-3 rounded-xl">
                    <div className="w-10 h-10 rounded-xl bg-blue-500 flex items-center justify-center text-white text-xl">
                        2
                    </div>
                    <h4 className='text-xl font-semibold'>On vous explique notre processus :</h4>
                </div>
            </div>

        </section>
    )
}

export default Services