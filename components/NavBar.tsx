'use client'

import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import SearchIcon from '@mui/icons-material/Search';
import {useRouter} from 'next/navigation'
import {motion, useMotionValueEvent, useScroll} from 'framer-motion'

const NavBar: React.FC = () => {

  const [keyword, setKeyword] = useState("")
  const router = useRouter()

  const handleFind = (e: any) => {
      e.preventDefault()
      const url = `/find?name=${keyword}`
      router.push(url)
  }

  const [hidden, setHidden] = useState(false)
  const { scrollYProgress } = useScroll()

  
  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const prev = scrollYProgress.getPrevious()
    if (latest > prev) {
      setHidden(true)
    } else {
      setHidden(false)
    }
  })

  const scrollControl = {
    visible: { y: 0 },
    hidden: { y: '-100%'}
  }

  return (
    <motion.nav 
    variants={scrollControl}
    animate={hidden ? 'hidden' : 'visible'}
    transition={{duration:0.5, ease:'easeInOut'}}
    className="w-full py-4 px-6 flex items-center justify-between fixed z-30 top-0 backdrop-blur-md">
      {/* Logo */}
      <Link href="/" className="text-white text-2xl font-bold">
        Logo
      </Link>

      {/* Search Bar */}
      <div className="relative flex-grow mx-10" style={{ margin: "0 24rem"}}>
        <SearchIcon className='absolute top-1/4 right-1 text-neutral-300'/>
        <form onSubmit={handleFind}>
          <input
            type="text"
            placeholder="Search..."
            onChange={(e) => setKeyword(e.target.value)}
            className="w-full p-2 rounded-md bg-neutral-700 opacity-40"
          />
        </form>

      </div>

      {/* Navigation Links */}
      <div className="flex items-center space-x-4">
        {/* <Link href="/products" className="text-white">
          Products
        </Link> */}
        <Link href="/about" className="text-white">
          About
        </Link>
      </div>
    </motion.nav>
  );
};

export default NavBar;
