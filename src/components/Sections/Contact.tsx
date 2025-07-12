"use client"
import Button from '@/components/Button'
import ContactButton from '@/components/ContactButton'
import Input from '@/components/Input'
import TextArea from '@/components/TextArea'
import { ADDRESS, MAIL, MAILTO, PHONES } from '@/constants/site'
import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/navigation'

const Contact = () => {

    const router = useRouter();

    return (
        <div className='md:w-4/5 w-[90%] h-auto flex lg:flex-row flex-col justify-center items-start rounded-xl gap-4'>

                <div className='w-full lg:w-1/2 h-auto p-4 flex flex-col items-start justify-start gap-4'>
                    <h3 className='text-5xl font-bold'>Nous contacter</h3>
                    <p className='text-xl text-gray-500 leading-6'>
                        Un problème, une question, une demande de devis ou un renseignement ?
                        N&apos;hésitez pas à nous contacter, nous sommes là pour vous aider !
                    </p>

                    <div className='w-full h-auto flex flex-col gap-4'>
                        {PHONES.map((phone, index) => (
                            <ContactButton
                                key={index}
                                icon={<PhoneIcon width={24} height={24} className='text-gray-400' />}
                                title="Téléphone"
                                content={phone}
                                onClick={() => router.push(`tel:${phone}`)}
                            />
                        ))}
                        <ContactButton
                            icon={<EnvelopeIcon width={24} height={24} className='text-gray-400' />}
                            title="Email"
                            content={MAIL}
                            onClick={() => router.push(MAILTO)}
                        />
                        <ContactButton
                            icon={<BuildingOffice2Icon width={24} height={24} className='text-gray-400' />}
                            title="Adresse"
                            content={ADDRESS}
                        />
                    </div>
                </div>

                <div className='w-full lg:w-1/2 h-auto p-4 flex flex-col items-start justify-center gap-2'>

                    <div className='w-full h-auto bg-white flex flex-col gap-4 p-4 rounded-lg shadow-2xl'>
                        <div className='w-full h-auto flex flex-row items-center justify-between gap-4'>
                            <Input type="text" label='Nom*' />
                            <Input type="text" label='Prénom' />
                        </div>
                        <Input type="text" label='Téléphone*' />
                        <Input type="email" label='Email*' />
                        <TextArea label='Votre message*' />
                        <Button variant='primary' className='text-sm'>Envoyer</Button>
                    </div>
                </div>


            </div>
    )
}

export default Contact