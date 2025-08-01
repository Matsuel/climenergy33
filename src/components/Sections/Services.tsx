"use client"

import Features from "../Feature"
import Layout from "../Layout"

const Services = () => {

    return (
        <Layout
            id='services'
            variants="cream"
            className="min-h-auto justify-center items-center py-16"
            title="Tout savoir sur nos services"
            subtitle="Que vous choisissiez l'entretien, le dépannage ou l'installation de systèmes de chauffage et de climatisation, nous avons les solutions adaptées à vos besoins."
        >
            <Features />
        </Layout>
    )
}

export default Services