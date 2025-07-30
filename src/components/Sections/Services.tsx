"use client"

import { SERVICES } from "@/constants/services"
import { motion } from "framer-motion"
import { useState } from "react"
import Layout from "../Layout"

const Services = () => {

    const [serviceType, setServiceType] = useState<number>(0)

    return (
        <Layout
            id='services'
            variants="cream"
            className="min-h-auto"
            title="Nos Services"
            subtitle="Comment on vous accompagne"
        >
            <div className="flex flex-col gap-4 items-start">
                <div className="flex items-center justify-center gap-2 bg-[#F8F8F8] p-3 rounded-xl">
                    <div className="w-8 h-8 rounded-xl bg-blue-500 flex items-center justify-center text-white text-xl">
                        1
                    </div>
                    <h4 className='text-xl font-semibold'>Vous choisissez le type d&apos;intervention :</h4>
                </div>
                <div className="flex md:flex-row flex-col items-start gap-2">
                    {SERVICES.map((service, index) => (
                        <label key={service.title} className="flex flex-row justify-center items-center gap-2 cursor-pointer">
                            <input
                                type="checkbox"
                                id="serviceType"
                                checked={serviceType === index}
                                onChange={() => setServiceType(index)}
                            />
                            <span className="w-8 h-8 flex items-center justify-center">{service.icon}</span>
                            <span className="mt-2">{service.title}</span>
                        </label>
                    ))}
                </div>
            </div>

            <div className="w-full flex flex-col gap-4 rounded-xl items-start">
                <div className="flex items-center justify-center gap-2 bg-[#F8F8F8] p-3 rounded-xl">
                    <div className="w-10 h-10 rounded-xl bg-blue-500 flex items-center justify-center text-white text-xl">
                        2
                    </div>
                    <h4 className='text-xl font-semibold'>On vous explique notre processus :</h4>
                </div>
                <div className="flex flex-row items-center w-full justify-start mb-2">
                    {SERVICES[serviceType].process.map((service, index, arr) => (
                        <div key={service.title} className="w-1/4 flex flex-col">
                            <div className="flex items-center">
                                <motion.div
                                    initial={{ backgroundColor: "#93C5FD" }}
                                    animate={{ backgroundColor: "#3B82F6" }}
                                    transition={{ duration: 0.7, delay: 0.7 * index }}
                                    className="w-8 h-8 rounded-xl flex items-center justify-center text-white text-xl relative overflow-hidden"
                                >
                                    {index + 1}
                                </motion.div>
                                {/* Tiret sauf après le dernier */}
                                {index < arr.length - 1 && (
                                    <div className="flex-1 h-1 mx-2 bg-blue-300 rounded-full relative overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: "100%" }}
                                            transition={{ duration: 0.7, delay: 0.7 * (index) }}
                                            className="absolute left-0 top-0 h-full bg-blue-500 rounded-full"
                                        />
                                    </div>
                                )}
                            </div>
                            <div key={service.title} className="flex justify-start">
                                <span className="mt-2 text-center text-sm">{service.title}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </Layout>
    )
}

export default Services