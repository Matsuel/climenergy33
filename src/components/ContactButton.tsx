import { cn } from '@/utils/cn';
import React from 'react'

interface ContactButtonProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
    icon: React.ReactNode;
    title: string;
    content: string;
}

const ContactButton = ({
    className,
    children,
    icon,
    title,
    content,
    ...props
}: ContactButtonProps) => {
    
    return (
        <div className={cn("w-full h-auto flex flex-row gap-2", className)} {...props}>
            <div className="w-12 h-12 bg-orange hover:bg-white hover:text-orange border-orange border rounded-lg flex items-center justify-center text-white cursor-pointer transition-colors duration-300">
                {icon}
            </div>
            <div className="w-auto h-auto flex flex-col">
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-sm text-gray-500">{content}</p>
            </div>
        </div>
    )
}

export default ContactButton