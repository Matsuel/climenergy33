import { NAVBAR_LINKS } from '@/constants/navbar';
import { MAILTO, PHONE_LINKS } from '@/constants/site';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {

    const year = new Date().getFullYear();

    return (
        <footer className='w-full h-auto flex flex-col px-8 pb-7'>

            <div className='w-full flex flex-row items-center justify-between'>
                <Image
                    src="/logonobg.png"
                    alt="Climenergy Logo"
                    width={100}
                    height={100}
                    className='object-contain'
                />

                <div className='w-1/2 flex flex-row items-start justify-start gap-24'>
                    <div className='w-auto h-auto flex flex-col items-start justify-center'>
                        <p className='text-black text-sm font-Montserrat font-medium mb-5'>Navigation</p>
                        <div className='w-auto h-auto flex flex-col items-start justify-center gap-4'>
                            {NAVBAR_LINKS.map((link, index) => (
                                <Link key={index} href={link.href} className='hover:text-black text-gray-500 text-sm font-Montserrat font-medium'>
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className='w-auto h-auto flex flex-col items-start justify-center'>
                        <p className='text-black text-sm font-Montserrat font-medium mb-5'>Contact</p>
                        <div className='w-auto h-auto flex flex-col items-start justify-center gap-4'>
                            <Link href={"https://maps.app.goo.gl/Djh3E5KnYXA6Q6Hm6"} target='_blank' className='text-gray-500 text-sm font-Montserrat font-medium'>
                                Adresse
                            </Link>
                            <Link href={MAILTO} className='hover:text-black text-gray-500 text-sm font-Montserrat font-medium'>
                                Email
                            </Link>
                            {PHONE_LINKS.map((phone, index) => (
                                <Link key={index} href={phone} className='hover:text-black text-gray-500 text-sm font-Montserrat font-medium'>
                                    {`Téléphone ${index + 1}`}
                                </Link>
                            ))}
                        </div>
                    </div>


                    <div className='w-auto h-auto flex flex-col items-start justify-center'>
                        <p className='text-black text-sm font-Montserrat font-medium mb-5'>Légales</p>
                        <div className='w-auto h-auto flex flex-col items-start justify-center gap-4'>
                            <Link href="/mentions-legales" className='hover:text-black text-gray-500 text-sm font-Montserrat font-medium'>
                                Mentions légales
                            </Link>
                            <Link href="/politique-de-confidentialite" className='hover:text-black text-gray-500 text-sm font-Montserrat font-medium'>
                                Politique de confidentialité
                            </Link>
                        </div>
                    </div>
                </div>


            </div>

            <div className='w-full h-[1px] bg-gray-300 my-4'></div>
            <div className='w-full flex flex-col gap-2 text-gray-600 text-sm font-Montserrat font-medium'>
                <p>&copy; {year} Climenergy. Tous droits réservés.</p>
            </div>

        </footer>
    )
}

export default Footer