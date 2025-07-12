import Navbar from "@/components/Navbar"
import Processus from "@/components/Sections/Processus"
import Services from "@/components/Sections/Services"
import React from 'react'

const ServicesPage = () => {
    return (
        <div className="w-full min-h-screen flex flex-col items-center gap-6">
            <Navbar />
            <Processus />
            <Services />
        </div>
    )
}

export default ServicesPage