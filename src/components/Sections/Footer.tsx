import { NAVBAR_LINKS } from '@/constants/navbar'
import { MAIL, MAILTO, PHONES } from '@/constants/site'
import Link from 'next/link'
import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'


const Footer = () => {
    return (
        <footer className='w-full h-auto flex flex-col items-center justify-center bg-white shadow-2xl p-3 gap-4'>
            <div className='w-[95%] h-auto flex flex-row items-center justify-center gap-4'>
                {NAVBAR_LINKS.map((link) => (
                    <Link key={link.label} href={link.href} className='text-[#4A5565] hover:text-black transition-colors duration-300 font-medium text-base'>
                        {link.label}
                    </Link>
                ))}
                <Link key={"Mentions Légales"} href={"/mentions-legales"} className='text-[#4A5565] hover:text-black transition-colors duration-300 font-medium text-base'>
                    Mentions Légales
                </Link>
            </div>

            <div className='w-[95%] h-auto flex flex-row items-center justify-center gap-4'>
                {PHONES.map((phone, index) => (
                    <Link key={index} href={`tel:${phone.replace(/\s/g, '')}`} className='text-[#4A5565] hover:text-black transition-colors duration-300 font-medium text-base flex flex-row items-center gap-2'>
                        <PhoneIcon width={20} height={20} />
                        {phone}
                    </Link>
                ))}
                <Link href={MAILTO} className='text-[#4A5565] hover:text-black transition-colors duration-300 font-medium text-base flex flex-row items-center gap-2'>
                    <EnvelopeIcon width={20} height={20} />
                    {MAIL}
                </Link>
            </div>

            <div className='w-[95%] h-auto flex flex-row items-center justify-center'>
                <p className='text-[#4A5565] font-medium text-base'>
                    &copy; {new Date().getFullYear()} Climenergy33. Tous droits réservés.
                </p>
            </div>

        </footer>
    )
}

export default Footer