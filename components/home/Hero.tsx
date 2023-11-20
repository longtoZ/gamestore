'use client'

import React ,{useRef, useEffect} from 'react'
import {motion, AnimatePresence, useScroll, useTransform} from 'framer-motion'
import Lenis from '@studio-freight/lenis'


const Hero = () => {
    const parallelogramDisplay = {
        animate: (index: number) => ({
            y: 20,
            transition: {
              ease: 'easeInOut',
              repeatType: "reverse",
              repeat: Infinity,
              duration: 2,
              delay: index
          }
    
        })
      }
    
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'end start']
    })

    const backgroundY = useTransform(scrollYProgress, [0,1], ['0%', '80%'])
  
    useEffect(() => {
        const lenis = new Lenis()
    
        function raf(time: any) {
          lenis.raf(time)
          requestAnimationFrame(raf)
        }
    
        requestAnimationFrame(raf)
      }, [])
  
    return (
    <AnimatePresence>
        <section ref={ref} style={{height:'110vh'}}>
            <motion.div className='relative' style={{y: backgroundY}}>
                <img src='/main_wallpaper.jpg' className='w-full' style={{filter:'brightness(0.7)', zIndex:'-5'}}/>
                {/* <img src="/simple_line_pattern_background.png" className='absolute top-0' style={{filter:'invert(1) opacity(0.1) blur(1px)'}}/> */}
                {/* <div className='z-10 bottom-0 absolute w-full h-64 bg-gradient-to-t from-neutral-900'></div> */}
            </motion.div>

            <div
            className='absolute right-20 top-1/2 -translate-y-1/2 flex'>
            <motion.div variants={parallelogramDisplay} animate="animate" custom={0.4} className="mt-40 -mr-10 cursor-pointer" style={{filter:'drop-shadow(0px 0px 10px black)'}}>
                <img src="/img/four.png" alt="" className='h-96 object-cover parallelogram'/>
            </motion.div>

            <motion.div variants={parallelogramDisplay} animate="animate" custom={0.8} className="mt-20 cursor-pointer" style={{filter:'drop-shadow(0px 0px 10px black)'}}>
                <img src="/img/one.jpg" alt="" className='h-96 object-cover parallelogram'/>
            </motion.div>

            <motion.div variants={parallelogramDisplay} animate="animate" custom={1.2} className='-ml-10 cursor-pointer' style={{filter:'drop-shadow(0px 0px 10px black)'}}>
                <img src="/img/two.jpg" alt="" className='h-96 object-cover parallelogram'/>
            </motion.div>
            </div>
            
            <div className='flex flex-row absolute top-1/3 left-40'>
            <div className='relative basis-1/2'>
                <div className='mb-10'>
                <span className='text-7xl font-extrabold'>Discover </span>
                <span className='text-5xl'>the</span>
                <br/>
                <span className='ml-14 text-7xl text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-500'>Ultimate </span>
                <span className='text-7xl font-extrabold'>online </span>
                <br/>
                <span className='ml-40 text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-red-500'>Gamestore </span>
                </div>
                <p>Embark on a grand adventure through our virtual realm, where you can explore an expansive collection of video games, consoles, and accessories at the most competitive prices.</p>
            
                <div className='flex flex-row justify-between w-1/2 mt-10'>
                <button className='w-36 h-12 bg-gradient-to-br from-red-500 to-amber-500 rounded-lg px-4 py-2'>Explore</button>
                <button className='w-36 h-12 bg-transparent border-2 rounded-lg px-4 py-2'>Learn more</button>
                </div>
            </div>
            </div>

        </section>
    </AnimatePresence>
  )
}

export default Hero