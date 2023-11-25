'use client'

import React ,{ useState, useRef }from 'react'
import {motion, useScroll, useTransform, AnimatePresence} from 'framer-motion'


const Title = () => {
      const [hoverDesc, setHoverDesc] = useState(-1)
    
      const descList = [
        {
          title: 'LETS', 
          desc: 'Online games unite global players, enabling real-time interaction and competition beyond borders.'
        },
        {
          title: 'DIVE',
          desc: 'They span diverse genres like MMORPGs, shooters, strategies, and puzzles, catering to various preferences.'
        },
        {
          title: 'INTO',
          desc: 'Players collaborate, compete, and build communities, engaging in missions and intense battles.'
        },
        {
          title: 'VIRTUAL',
          desc: 'Evolving technology offers stunning graphics, storytelling, and intricate gameplay, enhancing experiences.'
        },
        {
          title: 'REALM',
          desc: 'Online gaming evolution into esports sees skilled players competing professionally, drawing massive audiences.'
        }
      ]

      return (
        <div className='my-20 mx-20 relative leading-none' style={{height:'60rem', fontSize:'9rem'}}>
            <motion.div className='title'>
                {descList.map((e, index) => (
                    <div key={index} onMouseEnter={() => {setHoverDesc(index)}} onMouseLeave={() => {setHoverDesc(-1)}} className='w-full ml-6 z-20'>
                        <h1 style={{letterSpacing: hoverDesc==index? '2rem' : '0rem', color: hoverDesc==index ? '#262626' : 'white', transition:'all 0.4s'}}>{e['title']}</h1>
                    </div>
                ))}
            </motion.div>

            <div className='descriptions'>
                {descList.map((e, index) => (
                <div className='relative' key={index}>
                    <h1 style={{clipPath: hoverDesc==index ? 'inset(0 0 0)' : 'inset(50% 0 50%)'}} className='description'>-</h1>
                    <p style={{opacity: hoverDesc==index ? '1' : '0'}} className='text-lg absolute top-1/2 right-10 -translate-y-1/2 w-80 text-right text-neutral-900'>{e['desc']}</p>
                    <div className='w-full border-b border-neutral-800'></div>

                </div>
                ))}
            </div>
        </div>
      )
}

const Description = () => {

  const globeRef = useRef(null)
  const {scrollYProgress} = useScroll({
      target: globeRef,
      offset: ['0.1 1', '1 0']
  })

  const globeY = useTransform(scrollYProgress, [0,1], ['-20%', '40%'])

  return (
    <AnimatePresence>
        <section ref={globeRef} className='w-full bg-neutral-900 relative pt-40 mt-10 overflow-hidden' style={{zIndex:'1'}}>
            <motion.img src="/img/earth.jpg" alt="" className='absolute top-0 w-full' style={{top: globeY, filter:'brightness(0.5) grayscale(1) contrast(1.2)', height:'70rem'}}/>
            <Title/>
            {/* <div className='absolute bottom-0 w-screen h-64 bg-gradient-to-t from-neutral-900 z-20'></div> */}

        </section>

    </AnimatePresence>
  )
}

export default Description