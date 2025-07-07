import Button from '@/components/Button'
import ContactButton from '@/components/ContactButton'
import Input from '@/components/Input'
import Navbar from '@/components/Navbar'
import TextArea from '@/components/TextArea'
import { MAIL, PHONES } from '@/constants/site'
import { Mail, Phone } from 'lucide-react'
import React from 'react'

const ContactPage = () => {
    return (
        <div className="w-full min-h-screen flex flex-col items-center gap-6">
            <Navbar />

            <div className='w-4/5 h-auto flex flex-row justify-center items-start shadow-2xl bg-white rounded-xl gap-4'>
                <div className='w-1/2 h-auto p-4 flex flex-col items-start justify-center'>
                    <h3 className=''>Nous contacter</h3>
                    <p className='text-sm text-gray-500'>Pour toute demande de devis ou d'informations, n'hésitez pas à nous contacter.</p>

                    <div className='w-full h-auto bg-background flex flex-col gap-4 p-4 rounded-lg'>
                        <div className='w-full h-auto flex flex-row items-center justify-between gap-4'>
                            <Input type="text" placeholder='Nom*' />
                            <Input type="text" placeholder='Prénom' />
                        </div>
                        <Input type="text" placeholder='Téléphone*' />
                        <Input type="email" placeholder='Email*' />
                        <TextArea placeholder='Votre message*' />
                        <Button variant='primary'>Envoyer</Button>
                    </div>
                </div>

                <div className='w-1/2 h-auto p-4 flex flex-col items-start justify-start'>
                    <h3 className=''>Nos coordonnées</h3>
                    <p className='text-sm text-gray-500'>Vous avez une question ? N'hésitez pas à nous contacter :</p>

                    <div className='w-full h-auto flex flex-col gap-4'>
                        {PHONES.map((phone, index) => (
                            <ContactButton
                                key={index}
                                icon={<Phone size={24} />}
                                title="Téléphone"
                                content={phone}
                            />
                        ))}
                        <ContactButton
                            icon={<Mail size={24} />}
                            title="Email"
                            content={MAIL}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactPage