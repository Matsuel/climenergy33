import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    label: string;
}

const Input = ({
    className,
    label,
    ...props
}: InputProps) => {
    return (
        <div className="w-full h-auto flex flex-col gap-1">
            <label className="text-sm font-semibold text-gray-700">{label}</label>
            <input className="w-full h-12 p-2 bg-white rounded-lg text-black placeholder:text-black border border-gray-300" {...props} />
        </div>
    )
}

export default Input