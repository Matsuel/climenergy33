import React from 'react'
import Layout from '../Layout'
import ContactForm from '../ContactForm'

const Contact = () => {
    return (
        <Layout
            id='contact'
            title="Nous Contacter"
            subtitle="Une question, un projet ? Remplissez le formulaire ci-dessous, nous vous répondrons rapidement."
            className='items-center justify-center'
        >
            <ContactForm />
        </Layout>
    )
}

export default Contact