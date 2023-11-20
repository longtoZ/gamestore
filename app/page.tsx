'use client'

import {motion, AnimatePresence, useScroll, useTransform, useMotionTemplate} from 'framer-motion'
import Hero from '@/components/home/Hero'
import Description from '@/components/home/Description'
import Slides from '@/components/home/Slides'
import Comments from '@/components/home/Comments'
import Quote from '@/components/home/Quote'
import Benefit from '@/components/home/Benefit'
import Contact from '@/components/home/Contact'

export default function Home() {

  return (

    <main className="">
      <Hero/>
      <Description/>
      <Slides/>
      <Comments/>
      <Quote/>
      <Benefit/>
      <Contact/>
    </main>

  )
}
