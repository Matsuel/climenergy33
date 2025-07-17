"use client"
import { NAVBAR_LINKS } from '@/constants/navbar'
import { ADDRESS, MAILTO, SITE_NAME } from '@/constants/site'
import usePage from '@/hooks/usePage'
import { Mail, MapPinned, Menu, X } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import Button from './Button'
import NavbarLink from './NavbarLink'

const Navbar = () => {

    const { pathname } = usePage()

    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <nav className="md:w-4/5 w-[90%] h-auto flex flex-col justify-between items-center bg-white shadow-2xl mt-4 p-2 rounded-xl">
            <div className="w-full h-auto flex flex-row items-center justify-between">
                <div className="flex flex-col ml-4">
                    <h1 className="text-sm font-medium">{SITE_NAME}</h1>
                    <p className="text-xs text-gray-500 flex flex-row gap-1">{ADDRESS} <MapPinned size={12} /></p>
                </div>
                {/* Desktop links */}
                <div className="h-full hidden md:flex flex-row items-center gap-5">
                    {NAVBAR_LINKS.map((link) => (
                        <NavbarLink key={link.label} href={link.href} isActive={pathname === link.href} className="text-sm font-medium">
                            {link.label}
                        </NavbarLink>
                    ))}
                </div>
                <div className="flex flex-row items-center gap-2">
                    <Link href={MAILTO}>
                        <Button variant="primary">
                            <Mail size={16} />
                            Devis
                        </Button>
                    </Link>
                    <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors">
                        {!isOpen ? <Menu size={30} /> : <X size={30} />}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            <div className={`${isOpen ? 'flex' : 'hidden'} md:hidden flex-col items-start gap-3 mt-4 w-full`}>
                {NAVBAR_LINKS.map((link) => (
                    <Link key={link.label} href={link.href} className="text-base font-semibold font-Montserrat text-gray-700 hover:text-gray-900 py-2 ml-4">
                        {link.label}
                    </Link>
                ))}
            </div>
        </nav>
    )
}

export default Navbar