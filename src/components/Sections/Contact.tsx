import React from 'react'
import Layout from '../Layout'
import ContactForm from '../ContactForm'

const Contact = () => {
    return (
        <Layout
            id='contact'
            title="Nous Contacter"
            subtitle="Comment nous joindre"
            className='items-center justify-center'
        >
            <ContactForm />
        </Layout>
    )
}

export default Contact