import { motion, useScroll, useTransform } from 'framer-motion'
import React, { useRef, useEffect } from 'react'
import Lenis from '@studio-freight/lenis'
import Image from 'next/image'

const images = ['/posters/one.jpg', '/posters/two.jpg', '/posters/three.jpg', '/posters/four.jpg', '/posters/five.jpg', '/posters/six.jpg', '/posters/seven.jpg', '/posters/eight.jpg', '/posters/nine.jpg', '/posters/ten.jpg', '/posters/eleven.jpg', '/posters/twelve.jpg', '/posters/thirteen.jpg', '/posters/fourteen.jpg', '/posters/fifteen.jpg', '/posters/sixteen.jpg', '/posters/seventeen.jpg', '/posters/eighteen.jpg']

const Column = ({images, y=0}:any) => {
    return (
        <motion.div style={{y}} className='column'>
          {
            images.map((src: any, index: any) => {
              return <div key={index} className='image-container'>
                <Image width={1000} height={1000} src={src} alt="image" className='object-cover'/>
              </div>
            })
          }
        </motion.div>
    )
}

const Slides = () => {
  const container = useRef(null)
  const {scrollYProgress} = useScroll({
    target: container,
    offset: ['start end', 'end start']
  })

  const y1 = useTransform(scrollYProgress, [0,1], [0, 1700])
  const y2 = useTransform(scrollYProgress, [0,1], [0, 1200])
  const y3 = useTransform(scrollYProgress, [0,1], [0, 1600])
  const y4 = useTransform(scrollYProgress, [0,1], [0, 1100])
  const y5 = useTransform(scrollYProgress, [0,1], [0, 1800])
  const y6 = useTransform(scrollYProgress, [0,1], [0, 1300])


  useEffect(() => {
    const lenis = new Lenis()

    function raf(time: any) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (
    <div className='relative'>
      <div ref={container} className='gallery w-full px-10 relative'>
        {/* <Image src="/img/flame-god.jpg" alt="" className='-z-10 absolute top-0 left-0 right-0 w-full h-full  overflow-hidden' style={{filter:'blur(6px) brightness(0.25)'}}/> */}

        <Column images={[images[0], images[1], images[2]]} y={y1}/>
        <Column images={[images[3], images[4], images[5]]} y={y2}/>
        <Column images={[images[6], images[7], images[8]]} y={y3}/>
        <Column images={[images[9], images[10], images[11]]} y={y4}/>
        <Column images={[images[12], images[13], images[14]]} y={y5}/>
        <Column images={[images[15], images[16], images[17]]} y={y6}/>

      </div>
      <div className='absolute top-0 z-20 w-full h-full text-center leading-none bg-black bg-opacity-50' style={{fontSize:'12rem', paddingTop:'15rem'}}>
          <h1>BROWSE</h1>
          <h1 className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-red-500'>THOUSANDS</h1>
          <h1>OF</h1>
          <h1 className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500'>FANTASTIC</h1>
          <h1>GAMES</h1>
        </div>
    </div>
  )
}

export default Slides