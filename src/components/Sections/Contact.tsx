import React from 'react'
import Layout from '../Layout'
import ContactForm from '../ContactForm'

const Contact = () => {
    return (
        <Layout
            id='contact'
            title=""
            subtitle=""
            className='items-center justify-center'
        >
            <ContactForm />
        </Layout>
    )
}

export default Contact