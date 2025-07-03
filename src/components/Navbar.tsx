"use client"
import { NAVBAR_LINKS } from '@/constants/navbar'
import { MapPinned } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const Navbar = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <nav className='w-full h-auto flex flex-row justify-between px-[10%] py-4'>
            <div className='flex flex-row items-center'>
                <Image
                    src="/logonobg.png"
                    alt="Logo"
                    width={100}
                    height={100}
                />
                <div className='h-10 w-0.5 bg-gray-300 rounded-full' />
                <div className='flex flex-col ml-4'>
                    <h1 className='text-sm font-medium'>Clim Energy 33</h1>
                    <p className='text-xs text-gray-500 flex flex-row'>Saint-Loubès <MapPinned size={12} /></p>
                </div>
            </div>

            <div className='flex flex-row items-center gap-4 mt-4'>
                {NAVBAR_LINKS.map((link) => (
                    <Link key={link.label} href={link.href} className='text-sm font-medium text-gray-700 hover:text-gray-900'>
                        {link.label}
                    </Link>
                ))}

                <button>
                    Devis gratuit
                </button>
            </div>

        </nav>
    )
}

export default Navbar