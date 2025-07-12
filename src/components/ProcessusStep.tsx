"use client"
import React, { useState } from 'react'

interface ProcessusStepProps {
    step: {
        title: string;
        description: string;
        icon: React.ReactNode;
    };
}

const ProcessusStep = ({
    step
}: ProcessusStepProps) => {

    const [isHovered, setIsHovered] = useState<boolean>(false);

    return (
        <div
            key={step.title}
            className={`w-full h-auto flex flex-col items-center justify-center gap-2 p-4 bg-gray-100 rounded-xl shadow-md text-orange transition-all duration-300 cursor-pointer border border-gray-100
                ${isHovered ? 'shadow-xl -translate-y-2 scale-105 bg-white' : ''}
            `}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className={`w-auto h-auto flex items-center justify-center rounded-full p-3 transition-transform duration-300
                ${isHovered ? 'scale-110' : ''}
            `}>
                {step.icon}
            </div>
            <h4 className='text-lg font-semibold'>{step.title}</h4>
            <p className='text-sm text-gray-700 text-center'>{step.description}</p>
        </div>
    )
}

export default ProcessusStep