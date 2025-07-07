import { cn } from '@/utils/cn';
import React from 'react'

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    className?: string;
}

const TextArea = ({
    className,
    ...props
}: TextAreaProps) => {
    return (
        <textarea className={cn("w-full h-32 p-2 bg-white rounded-lg text-black placeholder:text-black", className)} {...props} />
    )
}

export default TextArea