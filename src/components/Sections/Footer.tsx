import { NAVBAR_LINKS } from '@/constants/navbar'
import Link from 'next/link'


const Footer = () => {
    return (
        <footer className='w-full h-auto flex flex-row items-center justify-between bg-white shadow-2xl p-3 gap-4 px-[10%]'>
            <div className='w-auto h-auto flex flex-row items-center justify-start gap-8'>
                {NAVBAR_LINKS.map((link) => (
                    <Link key={link.label} href={link.href} className='text-[#4A5565] hover:text-black transition-colors duration-300 font-medium text-base'>
                        {link.label}
                    </Link>
                ))}
                <Link key={"Mentions Légales"} href={"/mentions-legales"} className='text-[#4A5565] hover:text-black transition-colors duration-300 font-medium text-base'>
                    Mentions Légales
                </Link>
            </div>

            <div className='w-auto h-auto flex flex-row items-center justify-start'>
                <p className='text-[#4A5565] font-medium text-base'>
                    &copy; {new Date().getFullYear()} Climenergy33. Tous droits réservés.
                </p>
            </div>

        </footer>
    )
}

export default Footer