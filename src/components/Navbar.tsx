"use client"
import { NAVBAR_LINKS } from '@/constants/navbar'
import { SITE_NAME } from '@/constants/site'
import { Menu, Snowflake, X } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import Button from './Button'
import NavbarLink from './NavbarLink'

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false);
    };

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isMenuOpen ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
            <div className="container mx-auto container-padding py-4">
                <div className="flex items-center justify-between">
                    <Link href={"/"} className="flex items-center space-x-2">
                        <div className="p-2 bg-[rgb(0,123,255)]/10 rounded-lg">
                            <Snowflake className="w-6 h-6 text-[rgb(0,123,255)]" />
                        </div>
                        <span className="text-xl font-bold text-foreground">{SITE_NAME}</span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center gap-2 bg-[#F8F8F8] rounded-full">
                        {NAVBAR_LINKS.map((link) => (
                            <NavbarLink
                                key={link.label}
                                onClick={() => scrollToSection(link.href)}
                            >
                                {link.icon}
                                {link.label}
                            </NavbarLink>
                        ))}

                    </div>
                    <Button onClick={() => scrollToSection('contact')} className="hidden lg:flex shadow-lg hover:shadow-xl transition-all duration-300">
                        Devis Gratuit
                    </Button>

                    {/* Mobile Menu Button */}
                    <Button
                        variant="primary"
                        className="lg:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </Button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="lg:hidden mt-4 pb-4 space-y-4 glass-effect rounded-lg p-4 flex flex-col items-start">
                        {NAVBAR_LINKS.map((link) => (
                            <NavbarLink
                                key={link.label}
                                onClick={() => scrollToSection(link.href)}
                                className="block text-lg"
                            >
                                {link.label}
                            </NavbarLink>
                        ))}
                        <Button onClick={() => scrollToSection('contact')}>
                            Devis Gratuit
                        </Button>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar