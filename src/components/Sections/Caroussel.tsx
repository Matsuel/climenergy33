import React from 'react'
import Dot from '../Dot'

const Caroussel = () => {
    return (
        <section
            id='realisations'
            className='w-4/5 h-auto flex flex-col items-center justify-center gap-4'
        >
            <div className='w-auto h-auto flex flex-row items-center justify-center gap-4'>
                <Dot isActive={true} />
                <Dot isActive={false} />
                <Dot isActive={false} />
                <Dot isActive={false} />
            </div>
        </section>
    )
}

export default Caroussel