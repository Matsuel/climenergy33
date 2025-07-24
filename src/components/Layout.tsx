import { cn } from '@/utils/cn';
import React from 'react'

interface LayoutProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
    variants?: "white" | "cream";
    title: string;
    subtitle?: string;
}

const Layout = ({
    children,
    className,
    variants = "white",
    title,
    subtitle,
    ...props
}: LayoutProps) => {

    const backgroundColor = variants === "cream" ? "bg-[#EDEBE7]" : "bg-transparent";

    return (
        <section
            className={cn(`w-full min-h-screen h-auto flex flex-col items-start justify-start gap-4 py-8 ${backgroundColor} px-[10%]`, className)}
            {...props}
        >
            <h1 className='text-4xl font-bold'>{title}</h1>
            <h2 className='text-2xl'>{subtitle}</h2>
            {children}
        </section>
    )
}

export default Layout