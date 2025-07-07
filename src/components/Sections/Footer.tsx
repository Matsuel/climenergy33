import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (
        <footer className='w-full h-auto flex flex-col items-center bg-white shadow-2xl p-3'>
            <div className='w-[95%] h-auto flex flex-row items-center'>
                <Image
                    src="/logonobg.png"
                    alt="Climenergy Logo"
                    width={75}
                    height={75}
                    className='object-contain'
                />
            </div>

            <div className='w-[95%] h-[1px] bg-gray-300 my-4' />

            <div className='w-[95%] h-auto flex flex-row'>
                <p className='text-gray-600 font-medium text-base'>
                    &copy; {new Date().getFullYear()} Climenergy33. Tous droits réservés.
                </p>
            </div>

        </footer>
    )
}

export default Footer