"use client";
import { NAVBAR_LINKS } from '@/constants/navbar';
import { MAILTO, PHONE_LINKS } from '@/constants/site';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {

    const year = new Date().getFullYear();

    const scrollToSection = (href: string) => {
        const element = document.getElementById(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer className='w-full h-auto flex flex-col px-8 pb-7'>

            <div className='w-full flex md:flex-row flex-col items-center justify-between'>
                <Image
                    src="/logonobg.png"
                    alt="Climenergy Logo"
                    width={100}
                    height={100}
                    className='object-contain'
                />

                <div className='md:w-1/2 w-full md:px-0 px-3 md:mt-0 mt-16 flex flex-row flex-wrap gap-5 items-start justify-between'>
                    <div className='w-auto h-auto flex flex-col items-start justify-center'>
                        <Link href={"/"} className='text-black text-sm font-Montserrat font-medium mb-5'>Navigation</Link>
                        <div className='w-auto h-auto flex flex-col items-start justify-center gap-4'>
                            {NAVBAR_LINKS.map((link, index) => (
                                <button key={index} onClick={()=> scrollToSection(link.href)} className='hover:text-black cursor-pointer text-gray-500 text-sm font-Montserrat font-medium'>
                                    {link.label}
                                </button>
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