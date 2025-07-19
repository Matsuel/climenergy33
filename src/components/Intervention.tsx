import { Clock } from 'lucide-react'
import React from 'react'

const Intervention = () => {
    return (
        <div className='w-auto h-auto flex items-center justify-center border rounded-full text-blue-700 bg-blue-50 px-3 py-2 border-blue-200 cursor-pointer hover:bg-white transition-colors duration-300 gap-2'>
            <Clock className='w-5 h-5' />
            <h2 className='md:text-xl font-medium font-Montserrat'>Intervention du Lundi au Vendredi</h2>
        </div>
    )
}

export default Intervention