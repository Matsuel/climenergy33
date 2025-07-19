import { cn } from '@/utils/cn';
import React from 'react'

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode;
    variant?: 'primary' | 'secondary';
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
    }

    return (
        <button className={cn(`rounded-full text-xs font-semibold px-5 py-3 cursor-pointer transition-all duration-300 flex flex-row items-center justify-center gap-1 ${variants[variant]}`, className)} {...props}>
            {children}
        </button>
    )
}

export default Button