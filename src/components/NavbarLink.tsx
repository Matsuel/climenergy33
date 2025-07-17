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
        <button className="text-muted-foreground hover:text-primary transition-colors font-medium cursor-pointer" {...props}>
            {children}
        </button>
    )
}

export default NavbarLink