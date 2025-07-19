import { cn } from '@/utils/cn';
import React from 'react';

interface NavbarLinkProps extends React.HTMLAttributes<HTMLButtonElement> {
    className?: string;
}

const NavbarLink = ({
    className,
    children,
    ...props
}: NavbarLinkProps) => {

    return (
        <button
            {...props}
            className={cn("bg-transparent hover:bg-black hover:text-white rounded-full transition-colors duration-300 font-medium cursor-pointer px-5 py-3 flex items-center justify-center gap-2", className)}
        >
            {children}
        </button>
    )
}

export default NavbarLink