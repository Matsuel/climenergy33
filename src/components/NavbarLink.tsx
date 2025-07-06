import { cn } from '@/utils/cn';
import Link, { LinkProps } from 'next/link';
import React from 'react'

interface NavbarLinkProps extends LinkProps, React.HTMLAttributes<HTMLAnchorElement> {
    isActive?: boolean;
}

const NavbarLink = ({
    className,
    children,
    isActive,
    ...props
}: NavbarLinkProps) => {

    const variants = {
        active: 'bg-active-orange',
        inactive: 'bg-white hover:bg-active-orange'
    }

    return (
        <Link
            className={cn(`w-auto h-auto px-4 py-2 rounded-lg flex items-center justify-center text-black transition-colors duration-300 ${isActive ? variants.active : variants.inactive}`, className)}
            {...props}
        >
            {children}
        </Link>
    )
}

export default NavbarLink