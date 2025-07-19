import { variants } from '@/constants/button';
import { cn } from '@/utils/cn';
import NextLink, { LinkProps as NextLinkProps } from 'next/link'
import React from 'react'

interface LinkProps extends NextLinkProps, React.HTMLAttributes<HTMLAnchorElement> {
    children?: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'white' | 'black' | 'transparent';
}

const Link = ({
    children,
    className,
    variant = 'primary',
    ...props
}: LinkProps) => {
    return (
        <NextLink
            className={cn(`rounded-full text-xs font-semibold px-5 py-3 cursor-pointer transition-all duration-300 flex flex-row items-center justify-center gap-1 ${variants[variant]}`, className)}
            {...props}
        >
            {children}
        </NextLink>
    )
}

export default Link