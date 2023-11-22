'use client'

import CreditCardIcon from '@mui/icons-material/CreditCard';
import GoogleIcon from '@mui/icons-material/Google';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ScheduleIcon from '@mui/icons-material/Schedule';
import LockIcon from '@mui/icons-material/Lock';
import MoneyIcon from '@mui/icons-material/Money';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import React, { useState, useEffect } from "react";


const CountDown = ({seconds, link} : {seconds: number, link: string}) => {
    const [countdown, setCountdown] = useState(seconds)

    useEffect(() => {
        const current = setTimeout(() => {
            setCountdown(prev => prev-1)
        }, 1000)

        if (countdown <= 0) {
            clearInterval(current)
            location.replace(link)
        }

        return () => clearTimeout(current)
    }, [countdown])

    return (
        <p>Thanks for choosing our product. You will be directed to download page in <span className='text-green-500'>{countdown}</span></p>
    )
}

interface ProductDetailProps {
    product: any
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
    const [showModal, setShowModal] = useState(false)

    const [credit, setCredit] = useState(true)
    const [gpay, setGpay] = useState(false)
    const [paypal, setPaypal] = useState(false)

    const choose = 'text-center mx-2 p-4 border border-2 border-blue-500 rounded-lg'
    const unchoose = 'text-center mx-2 p-4 border border-neutral-400 rounded-lg'

    return (
        <div className='relative'>
            <div className='fixed top-0 left-0 right-0 w-full h-full -z-20 -mt-36'>
                <img src={product.backgroundURL} alt="" style={{filter: 'blur(10px'}}/>
                <div className='z-10 absolute w-full h-52 bg-gradient-to-t from-neutral-900' style={{top: '25rem'}}>
                </div>
                <div className='z-10 absolute w-full h-full bg-neutral-900' style={{top: '38rem'}}></div>
            </div>

            <div className="flex flex-row w-2/3 mt-40 mx-auto">
                <div className="flex flex-row w-1/2 mx-6 p-6 bg-neutral-800 bg-opacity-70 rounded-lg ">
                    <img src={product.imageURL} alt="" className='w-32 h-32 m-4 rounded-lg'/>
                    <div>
                        <h1 className="font-bold text-xl my-2">Product name</h1>
                        <div className='w-full border border-neutral-600 my-2'></div>
                        <p className='mb-6 text-neutral-300'>{product.name}</p>

                        <h1 className="font-bold text-xl my-2">Price</h1>
                        <div className='w-full border border-neutral-600 my-2'></div>
                        <p className='mb-6 text-neutral-300'>${product.price}</p>

                        <h1 className="font-bold text-xl my-2">Description</h1>
                        <div className='w-full border border-neutral-600 my-2'></div>
                        <p className='mb-6 text-neutral-300'>{product.shortDesc}</p>
                    </div>
                </div>

                <div className="w-1/2 mx-6 p-6 bg-neutral-800 bg-opacity-70 rounded-lg">
                    <h1 className="text-center text-2xl font-bold">Complete your purchase</h1>
                    <div className="my-8">
                        <h1 className="text-xl font-semibold my-2">Personal info</h1>

                        <section className="my-4">
                            <h2 className="my-1">Email address</h2>
                            <p className="text-sm text-neutral-400 my-1">We will send the purchase receipt to this address</p>
                            <input type="email" placeholder="example@email.com" className="w-full bg-neutral-700 p-2 rounded-lg bg-opacity-40"/>
                        </section>

                        <section className="my-4">
                            <h2 className="my-1">Contact no</h2>
                            <p className="text-sm text-neutral-400 my-1">We will use this in case of any query</p>
                            <input type="text" placeholder="0123 456 789" className="w-full bg-neutral-700 p-2 rounded-lg bg-opacity-40"/>
                        </section>
                    </div>

                    <div className="my-8"> 
                        <section className="my-4">
                            <h1 className="text-xl font-semibold my-2">Select payment method</h1>
                            <div className="grid grid-cols-3">
                                <div onClick={() => {setCredit(true); setGpay(false); setPaypal(false)}} className={credit ? choose : unchoose}>
                                    <CreditCardIcon/>
                                    <h2>Credit or debit card</h2>
                                </div>
                                <div onClick={() => {setCredit(false); setGpay(true); setPaypal(false)}} className={gpay ? choose : unchoose}>
                                    <GoogleIcon/>
                                    <h2>Google Pay</h2>
                                </div>
                                <div onClick={() => {setCredit(false); setGpay(false); setPaypal(true)}} className={paypal ? choose : unchoose}>
                                    <MoneyIcon/>
                                    <h2>Paypal</h2>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2>Card number</h2>
                            <div className="w-full bg-neutral-700 bg-opacity-40 p-2 rounded-lg flex flex-row">
                                <CreditCardIcon/>
                                <input type="text" className='bg-transparent w-full ml-2' placeholder='XXX - XXX - XXXX'/>
                            </div>
                        </section>

                        <section className='grid grid-cols-3 my-6'>
                            <div className='mx-2'>
                                <h2>Expiration Month</h2>
                                <div className="w-full bg-neutral-700 bg-opacity-40 p-2 rounded-lg flex flex-row overflow-hidden">
                                    <CalendarMonthIcon/>
                                    <input type="text" className='bg-transparent w-28 ml-2' placeholder='MM'/>
                                </div>
                            </div>

                            <div className='mx-2'>
                                <h2>Expiration Year</h2>
                                <div className="w-full bg-neutral-700 bg-opacity-40 p-2 rounded-lg flex flex-row overflow-hidden">
                                    <ScheduleIcon/>
                                    <input type="text" className='bg-transparent w-28 ml-2' placeholder='YYYY'/>
                                </div>
                            </div>

                            <div className='mx-2'>
                                <h2>Security Code</h2>
                                <div className="w-full bg-neutral-700 bg-opacity-40 p-2 rounded-lg flex flex-row overflow-hidden">
                                    <LockIcon/>
                                    <input type="text" className='bg-transparent w-28 ml-2'/>
                                </div>
                            </div>
                        </section>

                        <p className='my-6 text-neutral-400 text-sm'>Your transaction is secured with SSL encryption</p>
                        
                        <button className='w-full p-4 bg-gradient-to-br from-green-400 to-blue-500 rounded-lg' onClick={() => setShowModal(true)}>Complete Purchase</button>
                    </div>
                </div>
            </div>

            {
                showModal ? (
                    <div className="fixed inset-0 flex items-center justify-center z-20 bg-black bg-opacity-50">
                        <div className=' w-64 mx-auto bg-neutral-800 py-4 px-6 rounded-lg text-center'>
                            <CheckCircleOutlineIcon className='text-4xl'/>
                            <h1 className='text-2xl font-bold'>Success</h1>
                            <CountDown seconds={5} link={product.link}/>
                        </div>
                    </div>

                ) : null
            }

        </div>

    )
}

export default ProductDetail