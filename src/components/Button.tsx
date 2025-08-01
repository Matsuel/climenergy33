import { variants } from '@/constants/button';
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

    return (
        <button
            className={cn(`rounded-full text-xs font-semibold px-5 py-3 cursor-pointer transition-all duration-300 flex flex-row items-center justify-center gap-1 ${variants[variant]}`, className)}
            {...props}
        >
            {children}
        </button>
    )
}

export default Button