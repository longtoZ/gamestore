'use client'

import React, { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const LoginForm = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const router = useRouter()

    async function handleSubmit (e:any){
        e.preventDefault()
        
        try {
            const res = await signIn('credentials', {
                username, 
                password, 
                redirect:true,
                callbackUrl:'/dashboard'
            })

            if (res && res.error) {
                return;
            }

            router.replace('/dashboard')


        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div className="flex justify-center items-center min-h-screen relative">
        
        <div className="z-10 bg-opacity-50 bg-neutral-800 shadow-md rounded-xl px-8 pt-6 pb-8 mb-4 w-full max-w-md">
            <div className='absolute -z-10'>
                <div className="absolute top-1/2 w-80 h-80 bg-purple-300 rounded-full filter blur-3xl opacity-10 animate-blob"></div>
                <div className="absolute top-1/2 -right-28 w-80 h-80 bg-yellow-300 rounded-full filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
                <div className="absolute top-1/2 left-36 w-80 h-80 bg-pink-300 rounded-full filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
            </div>
            <h2 className="text-3xl font-bold mb-6 text-center text-white">
                <span className="bg-gradient-to-r text-transparent from-blue-500 to-purple-500 bg-clip-text">
                    Administrator
                </span>
            </h2>
            <form onSubmit={handleSubmit} method='post'>
                <div className="mb-6">
                    <label className="block text-neutral-400 text-sm font-bold mb-2">
                        <i className="fas fa-envelope mr-2"></i>Email
                    </label>
                    <div>
                        <input onChange={e => setUsername(e.target.value)} id="email" type="text" className="bg-neutral-700 bg-opacity-50 shadow appearance-none rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your email"/>
                    </div>
                </div>
                <div className="mb-6">
                    <label className="block text-neutral-400 text-sm font-bold mb-2">
                        <i className="fas fa-lock mr-2"></i>Password
                    </label>
                    <div>
                    <   input onChange={e => setPassword(e.target.value)} id="password" type="password" className="bg-neutral-700 bg-opacity-50 shadow appearance-none rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your password"/>
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <button type="submit" className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:shadow-outline w-full">
                        Sign in
                    </button>
                </div>
                <div className="text-center mt-4">
                    <a href="#" className="text-neutral-400 hover:underline">Forgot password?</a>
                </div>
            </form>
            <p className="text-center text-neutral-400 mt-6">Don't have an account? <a href="#" className="text-blue-500 hover:underline">Sign up</a></p>
        </div>
    </div>

  )
}

export default LoginForm