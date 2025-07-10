import { cn } from '@/utils/cn';
import React from 'react'

interface ContactButtonProps extends React.HTMLAttributes<HTMLDivElement> {
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
        <div className={cn("w-full h-auto flex flex-row items-center gap-2 text-gray-600", className)} {...props}>
            {icon}
            <div className="w-auto h-auto flex flex-col">
                <h3 className="text-lg font-medium">{title}</h3>
                <p className="text-sm font-medium">{content}</p>
            </div>
        </div>
    )
}

export default ContactButton