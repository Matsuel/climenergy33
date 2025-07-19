import { cn } from '@/utils/cn';
import React from 'react'

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'white' | 'black' | 'transparent';
}

const Button = ({
    children,
    className,
    variant = 'primary',
    ...props
}: ButtonProps) => {

    const variants = {
        primary: 'bg-orange text-white border border-orange hover:bg-white hover:text-orange',
        secondary: 'bg-white text-orange border border-orange hover:bg-orange hover:text-white',
        white: 'bg-white text-black border border-gray-300 hover:bg-gray-100',
        black: 'bg-black text-white border border-black hover:bg-gray-800 hover:text-white',
        transparent: 'bg-transparent text-black border border-gray-100 hover:bg-gray-100',
    }

    return (
        <button className={cn(`rounded-full text-xs font-semibold px-5 py-3 cursor-pointer transition-all duration-300 flex flex-row items-center justify-center gap-1 ${variants[variant]}`, className)} {...props}>
            {children}
        </button>
    )
}

export default Button