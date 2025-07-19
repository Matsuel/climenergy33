"use client"
import { cn } from '@/utils/cn';
import React from 'react';

interface NavbarLinkProps extends React.HTMLAttributes<HTMLButtonElement> {
    isActive: boolean;
    className?: string;
}

const NavbarLink = ({
    className,
    isActive,
    children,
    ...props
}: NavbarLinkProps) => {

    const activeStyle = "bg-black text-white";
    const inactiveStyle = "bg-transparent text-black hover:bg-black hover:text-white";

    return (
        <button
            {...props}
            className={cn("rounded-full transition-colors duration-300 font-medium cursor-pointer px-5 py-3 flex items-center justify-center gap-2", className, {
                [activeStyle]: isActive,
                [inactiveStyle]: !isActive,
            })}
        >
            {children}
        </button>
    )
}

export default NavbarLink