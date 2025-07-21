"use client";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import Dot from '../Dot';

const images = [
    "/caroussel/1.jpeg",
    "/caroussel/2.jpeg",
    "/caroussel/3.jpeg",
    "/caroussel/4.jpeg",
];

const Caroussel = () => {
    const [current, setCurrent] = useState<number>(0);

    const prev = () => setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    const next = () => setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id='realisations' className='w-full flex flex-col items-center gap-4'>
            <div className='relative w-full flex justify-center items-center'>
                {/* Wrapper masquant les débordements */}
                <div className='w-[90%] overflow-hidden rounded-3xl bg-gray-100'>
                    {/* Carrousel défilant horizontalement */}
                    <div
                        className="flex transition-transform duration-700 ease-in-out"
                        style={{ transform: `translateX(-${current * 85}%)` }} // Décalage basé sur la taille du slide
                    >
                        {images.map((img, idx) => (
                            <div
                                key={idx}
                                className="min-w-[85%] mx-2 shrink-0 rounded-2xl overflow-hidden shadow-lg"
                            >
                                <img
                                    src={img}
                                    alt={`Slide ${idx + 1}`}
                                    className="w-full h-[500px] object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Boutons de navigation */}
                <button
                    className="absolute left-4 z-10 bg-white/70 hover:bg-white rounded-full p-2 shadow"
                    onClick={prev}
                    aria-label="Précédent"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                    className="absolute right-4 z-10 bg-white/70 hover:bg-white rounded-full p-2 shadow"
                    onClick={next}
                    aria-label="Suivant"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>
            </div>

            {/* Pagination */}
            <div className='flex items-center justify-center gap-2 mt-2'>
                {images.map((_, idx) => (
                    <Dot
                        key={idx}
                        isActive={idx === current}
                        onClick={() => setCurrent(idx)}
                    />
                ))}
            </div>
        </section>
    );
};

export default Caroussel;
