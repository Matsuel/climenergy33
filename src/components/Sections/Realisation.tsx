import React from 'react'
import { Marquee } from '../Marquee';
import ReviewCard from '../ReviewCard';

const images = [
    "/caroussel/1.jpeg",
    "/caroussel/2.jpeg",
    "/caroussel/3.jpeg",
    "/caroussel/4.jpeg",
    "/caroussel/5.jpeg",
    "/caroussel/6.jpeg",
    "/caroussel/7.jpeg",
    "/caroussel/8.jpeg",
    "/caroussel/9.jpeg",
    "/caroussel/10.jpeg",
    "/caroussel/11.jpeg",
];

const firstRow = images.slice(0, images.length / 2);
const secondRow = images.slice(images.length / 2);

const Realisation = () => {
    return (
        <section
            id='realisations'
            className='w-full max-w-screen overflow-hidden flex flex-col items-center gap-4 bg-[#EDEBE7]'
        >
            <Marquee pauseOnHover className="[--duration:20s]">
                {firstRow.map((review) => (
                    <ReviewCard key={review} src={review} />
                ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:20s]">
                {secondRow.map((review) => (
                    <ReviewCard key={review} src={review} />
                ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
        </section>
    )
}

export default Realisation