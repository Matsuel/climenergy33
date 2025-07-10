import React from 'react';

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label: string;
}

const TextArea = ({
    label,
    ...props
}: TextAreaProps) => {
    return (
        <div className="w-full h-auto flex flex-col gap-1">
            <label className="text-sm font-semibold text-gray-700">{label}</label>
            <textarea className="w-full h-32 p-2 bg-white rounded-lg text-black placeholder:text-black border border-gray-300" {...props} />
        </div>
    )
}

export default TextArea