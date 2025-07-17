import Navbar from "@/components/Navbar"
import Footer from "@/components/Sections/Footer"
import Processus from "@/components/Sections/Processus"
import Services from "@/components/Sections/Services"
import Testimonials from "@/components/Sections/Testimonials"
import React from 'react'

const ServicesPage = () => {
    return (
        <div className="w-full min-h-screen flex flex-col items-center gap-6 py-16 lg:py-24">
            <Navbar />
            <Processus />
            <Testimonials />
            <Services />
            <Footer />
        </div>
    )
}

export default ServicesPage