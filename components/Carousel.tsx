'use client';

import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import React, { useState, useEffect } from 'react';

interface SlidesProps {
    slides: string[];
    autoSlide: boolean;
    autoSlideInterval:number;
    blur:boolean;
}


const Carousel = ({slides, autoSlide, autoSlideInterval, blur}:SlidesProps) => {
    const [current, setCurrent] = useState(0)

    const prev = () => setCurrent(current => (current==0 ? slides.length-1 : current-1))
    const next = () => setCurrent(current => (current==slides.length-1 ? 0 : current+1))
    
    useEffect(() => {
        if (autoSlide) {
            const slideInterval = setInterval(next, autoSlideInterval)
            return () => clearInterval(slideInterval)
        }
    }, [])

    return (
        <div className="overflow-hidden relative w-full" style={{height:'inherit'}}>
            <div className="flex transition-transform ease-in-out duration-500 relative w-full" style={{height:'inherit', transform: `translateX(-${current*100}%)`, filter: `${blur ? 'brightness(0.5) blur(2px)' : ''}`}}>
                {slides.map(s => (
                    <img key={s} src={s} className="w-full object-cover"></img>
                ))}
            </div>
            <div className="absolute inset-0 flex items-center justify-between p-4">
                <button onClick={prev} className="z-10 p-1 rounded-full transition ease-in-out bg-transparent text-white hover:bg-white hover:text-gray-800">
                    <ChevronLeft/>
                </button>
                <button onClick={next} className="z-10 p-1 rounded-full transition ease-in-out bg-transparent text-white hover:bg-white hover:text-gray-800">
                    <ChevronRight/>
                </button>
            </div>

            <div className="absolute bottom-4 right-0 left-0">
                <div className="flex items-center justify-center gap-2">
                    {slides.map((_,i) => (
                        <div key={i} className={`transition-all w-3 h-3 bg-white rounded-full ${current == i ? "p-2" : "bg-opacity-50"}`}></div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Carousel