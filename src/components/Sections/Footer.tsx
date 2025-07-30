import React from 'react'

const Footer = () => {

    const year = new Date().getFullYear();

    return (
        <footer className='w-full h-auto flex flex-col px-8 pb-7'>

            <div className='w-full h-[1px] bg-gray-300 my-4'></div>
            <div className='w-full flex flex-col gap-2 text-gray-600 text-sm font-Montserrat font-medium'>
                <p>&copy; {year} Climenergy. Tous droits réservés.</p>
            </div>
            
        </footer>
    )
}

export default Footer