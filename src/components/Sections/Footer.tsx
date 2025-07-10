import { NAVBAR_LINKS } from '@/constants/navbar'
import Link from 'next/link'


const Footer = () => {
    return (
        <footer className='md:w-4/5 w-[90%] h-auto flex lg:flex-row flex-col items-center justify-between bg-white shadow-2xl p-3 gap-4 px-5 rounded-xl'>
            <div className='w-auto h-auto flex flex-row items-center justify-start gap-8'>
                {NAVBAR_LINKS.map((link) => (
                    <Link key={link.label} href={link.href} className='text-[#4A5565] hover:text-black transition-colors duration-300 font-medium md:text-base text-[12px]'>
                        {link.label}
                    </Link>
                ))}
                <Link key={"Mentions Légales"} href={"/mentions-legales"} className='text-[#4A5565] hover:text-black transition-colors duration-300 font-medium md:text-base text-[12px]'>
                    Mentions Légales
                </Link>
            </div>

            <div className='w-auto h-auto flex flex-row items-center justify-start'>
                <p className='text-[#4A5565] font-medium md:text-base text-[12px]'>
                    &copy; {new Date().getFullYear()} Climenergy33. Tous droits réservés.
                </p>
            </div>

        </footer>
    )
}

export default Footer