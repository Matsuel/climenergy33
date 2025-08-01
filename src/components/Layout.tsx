import { cn } from '@/utils/cn';
import { capitalize } from '@/utils/text';
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
            <div className="mx-auto max-w-2xl text-center">
                <h3 className="text-base/7 font-semibold text-indigo-600">{capitalize(props.id as string)}</h3>
                <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">{title}</h2>
                <p className="mt-2 text-lg/8 text-gray-600">{subtitle}</p>
            </div>
            {children}
        </section>
    )
}

export default Layout