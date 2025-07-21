import { cn } from '@/utils/cn';
import React from 'react'

interface DotProps extends React.HTMLAttributes<HTMLDivElement> {
    isActive?: boolean;
}

const Dot = ({
    className,
    isActive,
    ...props
}: DotProps) => {
    return (
        <div className={cn(`w-4 h-4 bg-transparent rounded-full border-2 ${isActive ? 'border-black' : 'border-gray-400'} flex items-center justify-center`, className)} {...props}>
            <div className={cn('w-2 h-2 rounded-full', {
                'bg-black': isActive,
                'bg-transparent': !isActive
            })} />
        </div>
    )
}

export default Dot