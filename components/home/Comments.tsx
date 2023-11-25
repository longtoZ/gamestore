'use client'

import React, {useState, useEffect, useRef} from 'react'
import {motion, useScroll, useSpring, useInView, useAnimation} from 'framer-motion'


interface Props {
    children: React.ReactNode,
    floatRight?: boolean
}

const Reveal = ({children, floatRight}: Props) => {
    const ref = useRef(null)
    const isInView = useInView(ref)

    const mainControls = useAnimation()
    const slideControls = useAnimation()

    useEffect(()=>{
        if (isInView) {
            mainControls.start('visible')
            slideControls.start('visible')
        } else {
            mainControls.start('hidden')
            slideControls.start('hidden')
        }
    },[isInView, mainControls, slideControls])

    return (
        <div ref={ref} className='relative w-fit overflow-hidden' style={{float: floatRight ? 'right' : 'none'}}>
            <motion.div
                variants={{
                    hidden: {opacity:0, y:100},
                    visible: {opacity:1, y:0}
                }}
                initial='hidden'
                animate={mainControls}
                transition={{duration:0.5, delay:0.5}}
            >{children}
            </motion.div>
            <motion.div
                variants={{
                    hidden: {left: 0},
                    visible: {left: '100%'}
                }}
                initial='hidden'
                animate={slideControls}
                transition={{duration:0.5, ease:'easeIn'}}
                style={{
                    position: 'absolute',
                    top: 4,
                    bottom: 4,
                    left: 0,
                    right: 0,
                    background: '#ef4444',
                    zIndex: 3
                }}
            >
            </motion.div>

        </div>
    )
}

const Comments = () => {

    const ref = useRef(null)

    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ['end end', 'start start']
    })

    const scaleX = useSpring(scrollYProgress, {stiffness:100, damping:30})

    const floating =  {
        animate: (index: number) => ({
            y: 40,
            transition: {
              ease: 'easeInOut',
              repeatType: "reverse",
              repeat: Infinity,
              duration: 2,
              delay: index
          }
    
        })
    }

    return (
        <div className='w-full px-40 relative pattern py-40' ref={ref}>
            <div className='progress pt-20'>
                <h1>What people say</h1>
                <motion.div className='progress-bar' style={{scaleX: scaleX}}></motion.div>
            </div>

            <section className='text-left my-52'>
                <Reveal>
                    <div className='grid grid-cols-2'>
                        <h1 style={{fontSize:'4rem'}}>
                            <span className='text-red-400'>&quot; </span>This is the biggest game site I&apos;ve ever seen.<span className='text-red-400'> &quot;</span>
                        </h1>
                        <motion.img src="/brand/twitch.png" alt="" variants={{
        animate: (index: number) => ({
            y: 40,
            transition: {
              ease: 'easeInOut',
              repeatType: "reverse",
              repeat: Infinity,
              duration: 2,
              delay: index
          }
    
        })
    }} animate='animate' className='mx-auto my-auto' style={{width:'14rem'}}/>
                    </div>
                </Reveal>
                <Reveal>
                    <p className='text-neutral-500 text-xl'>User 1 <br/> Twitch streamer</p>
                </Reveal>
            </section>

            <section className='text-right my-52'>
                <Reveal>
                    <div className='grid grid-cols-2'>
                        <motion.img src="/brand/blogger.png" alt="" variants={{
        animate: (index: number) => ({
            y: 40,
            transition: {
              ease: 'easeInOut',
              repeatType: "reverse",
              repeat: Infinity,
              duration: 2,
              delay: index
          }
    
        })
    }} animate='animate' className='mx-auto my-auto' style={{width:'14rem'}}/>
                        <h1 style={{fontSize:'4rem'}}>
                            <span className='text-red-400'>&quot; </span>I love the variety of game categories presented in this store.<span className='text-red-400'> &quot;</span>
                        </h1>
                    </div>

                </Reveal>
                <Reveal floatRight={true}>
                    <p className='text-neutral-500 text-xl'>User 2 <br/> Blogger</p>
                </Reveal>
            </section>

            <section className='text-left my-52'>
                <Reveal>
                    <div className='grid grid-cols-2'>
                        <h1 style={{fontSize:'4rem'}}>
                            <span className='text-red-400'>&quot; </span>Absolutely amazing! That&apos;s all I wanna say<span className='text-red-400'> &quot;</span>
                        </h1>
                        <motion.img src="/brand/youtube.png" alt="" variants={{
        animate: (index: number) => ({
            y: 40,
            transition: {
              ease: 'easeInOut',
              repeatType: "reverse",
              repeat: Infinity,
              duration: 2,
              delay: index
          }
    
        })
    }} animate='animate' className='mx-auto my-auto' style={{width:'14rem'}}/>
                    </div>
                </Reveal>
                <Reveal>
                    <p className='text-neutral-500 text-xl'>User 3<br/> Youtuber</p>
                </Reveal>
            </section>

            <section className='text-right my-52'>
                <Reveal>
                    <div className='grid grid-cols-2'>
                        <motion.img src="/brand/twitter.png" alt="" variants={{
        animate: (index: number) => ({
            y: 40,
            transition: {
              ease: 'easeInOut',
              repeatType: "reverse",
              repeat: Infinity,
              duration: 2,
              delay: index
          }
    
        })
    }} animate='animate' className='mx-auto my-auto' style={{width:'14rem'}}/>
                        <h1 style={{fontSize:'4rem'}}>
                            <span className='text-red-400'>&quot; </span>To be honest, this website should be more and more popular.<span className='text-red-400'> &quot;</span>
                        </h1>
                    </div>

                </Reveal>
                <Reveal floatRight={true}>
                    <p className='text-neutral-500 text-xl'>User 4 <br/> Twitter user</p>
                </Reveal>
            </section>
        </div>
    )
}

export default Comments