import React, {useRef, useEffect} from 'react'
import {motion, useScroll, useTransform, AnimatePresence} from 'framer-motion'
import Lenis from '@studio-freight/lenis'

const Benefit = () => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start']
    })

    const backgroundY = useTransform(scrollYProgress, [0,1], ['-30%', '30%'])
    const scale = useTransform(scrollYProgress, [0,1], ['200%', '100%'])
  
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
    <div ref={ref} className='py-20 w-full relative overflow-hidden' style={{height:'110vh'}}>
        <motion.img src="img//flame-god.jpg" alt="" className='absolute left-0 top-0 w-full h-full -z-20 object-cover rounded-xl' style={{filter:'brightness(0.75)', top:backgroundY, scale:scale}}/>
        <h1 className='text-6xl font-semibold text-center mb-10 mt-20'>Why choose us?</h1>
        <div className='flex justify-center gap-x-10'>
            <div className='w-52 h-84 shadow-xl px-5 py-7 mb-20' style={{backdropFilter:'blur(10px)'}}>
                <h1 className='text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-red-600'>01.</h1>
                <h1 className='text-2xl font-semibold my-2'>Huge <br/>collection</h1>
                <p className='text-neutral-400 pt-4'>A collection of more than 5,000 uniques games varied in many different types.</p>
            </div>
            <div className='w-52 h-84 shadow-xl px-5 py-7 rounded mt-20' style={{backdropFilter:'blur(10px)'}}>
                <h1 className='text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-red-600'>02.</h1>
                <h1 className='text-2xl font-semibold my-2'>High <br/>quality</h1>
                <p className='text-neutral-400 pt-4'>The site offers top-choice games which is highly rated on other platforms.</p>
            </div>
            <div className='w-52 h-84 shadow-xl px-5 py-7 rounded mb-20' style={{backdropFilter:'blur(10px)'}}>
                <h1 className='text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-red-600'>03.</h1>
                <h1 className='text-2xl font-semibold my-2'>Good <br/>price</h1>
                <p className='text-neutral-400 pt-4'>All the games on our platform are on sale evey week so that people can buy whenever they want.</p>
            </div>
            <div className='w-52 h-84 shadow-xl px-5 py-7 rounded mt-20' style={{backdropFilter:'blur(10px)'}}>
                <h1 className='text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-red-600'>04.</h1>
                <h1 className='text-2xl font-semibold my-2'>Big <br/>community</h1>
                <p className='text-neutral-400 pt-4'>Our friendly and supportive community always ready to help people who are fascinated in games.</p>
            </div>
        </div>
    </div>
    </AnimatePresence>
  )
}

export default Benefit