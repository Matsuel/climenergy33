import { Star } from 'lucide-react';
import Image from 'next/image';
import React from 'react'

interface TestimonialProps {
    stars: number;
    text: string;
    author: string;
    image?: string;
    variant?: 'xl' | 'lg';
}

const Testimonial = ({
    image,
    stars,
    text,
    author,
    variant = 'lg',
}: TestimonialProps) => {
    return (
        <div className={`${variant === 'xl' ? 'w-4/5' : 'w-1/3'} h-auto flex flex-col items-start justify-start gap-2 p-4 bg-gray-100 rounded-lg`}>
            <div className='flex flex-row items-center justify-start gap-2'>
                {[...Array(stars)].map((_, index) => (
                    <Star
                        fill='currentColor'
                        key={index}
                        className='text-yellow-500'
                        size={20}
                    />
                ))}
            </div>
            <p className='text-sm text-gray-700'>&quot;{text}&quot;</p>
            <div className='flex flex-row items-center justify-start gap-2'>
                {image ? (
                    <Image
                        width={40}
                        height={40}
                        src={image}
                        alt={author}
                        className='w-10 h-10 rounded-full object-cover'
                    />
                ) : (
                    <div className='w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center'>
                        <span className='text-lg font-bold text-gray-800'>{author.charAt(0)}</span>
                    </div>
                )}
                <p className='text-sm text-gray-700 font-bold'>{author}</p>
            </div>
        </div>
    )
}

export default Testimonial