'use client'

import React, {useState, useEffect, useRef} from 'react'
import {motion, useScroll, useTransform, AnimatePresence} from 'framer-motion'

function useMousePosition () {
    const [mousePosition, setMousePosition] = useState({x: 0, y: 0})

    const updateMousePosition = (e: any) => {
        const rect = e.target.getBoundingClientRect()
        setMousePosition({x: e.clientX - rect.left, y: e.clientY - rect.top})
    }

    useEffect(()=>{
        window.addEventListener('mousemove', updateMousePosition)
        return () => {
            window.removeEventListener('mousemove', updateMousePosition)
        }
    },[])

    return mousePosition
}

const Quote = () => {

    const {x,y} = useMousePosition();
    const [isHovered, setIsHovered] = useState(false);
    const size = isHovered ? 300 : 50

    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start']
    })

    const backgroundY = useTransform(scrollYProgress, [0,1], ['-40%', '20%'])

  return (
    <AnimatePresence>
        <div ref={ref} className='text-8xl text-center py-40 relative overflow-hidden' style={{height:'110vh'}}>
            <motion.img src="/img/dragon.jpg" alt="" className='absolute top-0 left-0 w-full -z-30' style={{top: backgroundY, filter:'grayscale(1) brightness(0.5) blur(2px)'}}/>
            <div className='w-1/3 mx-auto'>
                <h1 className='text-3xl text-neutral-400 mb-6'>What I think</h1>
                <div className='w-full border-b-2 border-neutral-400'></div>
            </div>

            <motion.div 
                className='mask p-40'
                animate={{
                    WebkitMaskPosition: `${x - size/2}px ${y - size/2}px`,
                    WebkitMaskSize: `${size}px`
                }}
                transition={{type: 'tween', ease: 'backOut'}}
            >
                <p onMouseEnter={() => {setIsHovered(true)}} onMouseLeave={() => {setIsHovered(false)}}>Actually I am so lazy to make new games since they take so much time and effort to create a single action.</p>
            </motion.div>

            <div className='p-40'>

                <p>What I am always expecting is to make people satisfy with all the interesting games we produce<span className='text-red-400'>.</span></p>
            </div>
        </div>
    </AnimatePresence>
  )
}

export default Quote