import React, {useRef} from 'react'
import {motion, useScroll, useTransform, AnimatePresence} from 'framer-motion'

const Contact = () => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start']
    })

    const backgroundY = useTransform(scrollYProgress, [0,1], ['-20%', '30%'])

  return (
    <AnimatePresence>
        <div ref={ref} className='relative py-20 ' style={{height:'110vh'}}>
            <motion.img src="/img/portal.jpg" alt="" className='absolute top-0 left-0 w-full -z-10' style={{top:backgroundY}}/>
            <div className='grid grid-cols-2 w-2/3 mx-auto p-10 rounded-xl mt-20' style={{backdropFilter:'blur(10px)'}}>
                <div>
                    <h1 className='font-bold text-6xl px-6'>Let&apos;s be in touch!</h1>
                </div>
                <div>
                    <p>Feel free to send us feedback and suggestion to improve our service. We are very appreciated with your responding!</p>
                    <br/>
                    <div className='mb-6'>
                        <h1>Your name</h1>
                        <input type="text" className='w-full bg-neutral-800 p-2 rounded-lg bg-opacity-50'/>
                    </div>
                    <div className='mb-6'>
                        <h1>Your email</h1>
                        <input type="email" className='w-full bg-neutral-800 p-2 rounded-lg bg-opacity-50'/>
                    </div>
                    <div className='mb-6'>
                        <h1>Title</h1>
                        <input type="text" className='w-full bg-neutral-800 p-2 rounded-lg bg-opacity-50'/>
                    </div>
                    <div className='mb-6'>
                        <h1>Content</h1>
                        <textarea className='w-full bg-neutral-800 p-2 rounded-lg resize-y bg-opacity-50'/>
                    </div>

                    <h1>Service</h1>
                    <div className='grid grid-cols-2 mb-6'>
                        <div className='my-2'>
                            <input type="checkbox" className='text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'/>
                            <label className='px-4'>Advertising</label>
                        </div>
                        <div className='my-2'>
                            <input type="checkbox" className='text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'/>
                            <label className='px-4'>Design</label>
                        </div>
                        <div className='my-2'>
                            <input type="checkbox" className='text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'/>
                            <label className='px-4'>Performance</label>
                        </div>
                        <div className='my-2'>
                            <input type="checkbox" className='text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'/>
                            <label className='px-4'>Privacy</label>
                        </div>
                        <div className='my-2'>
                            <input type="checkbox" className='text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'/>
                            <label className='px-4'>Ownership</label>
                        </div>
                        <div className='my-2'>
                            <input type="checkbox" className='text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'/>
                            <label className='px-4'>Others</label>
                        </div>

                    </div>
                    <button className='w-full bg-gradient-to-tl from-orange-500 to-neutral-50 rounded-lg' style={{padding:'1px'}}>
                        <div className='bg-neutral-900 rounded-lg p-4 bg-opacity-50'>
                            <span className=''>
                                Send message
                            </span>
                        </div>
                    </button>
                </div>

            </div>
        </div>
    </AnimatePresence>
    )
}

export default Contact