import { cn } from '@/utils/cn';
import React from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string;
}

const Input = ({
    className,
    ...props
}: InputProps) => {
    return (
        <input className={cn("w-full h-12 p-2 bg-white rounded-lg text-black placeholder:text-black", className)} {...props} />
    )
}

export default Input