'use client'

import React, {useEffect, useState} from 'react'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation';
import Image from 'next/image'


const FindProduct = () => {
    const searchParams = useSearchParams()
    const name = searchParams?.get('name')
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch(`/api/query?name=${name}`, {cache: "no-store"});
            setProducts(await response.json());
        }

        fetchProducts()
    },[])

    const router = useRouter()

  return (
    <div className='mt-20 w-full flex justify-center flex-col'>
        {products.map((e: any) => (
            <div className='w-1/2 p-4 my-6 mx-auto bg-opacity-50 rounded-lg cursor-pointer transition ease-in-out duration-200 hover:bg-neutral-800 flex' onClick={() => router.push(`/products/${e._id}`)}>
                <img alt="" src={e.imageURL} className='w-28 mr-6 rounded-lg'/>
                <div>
                    <h1 className='text-xl font-bold'>{e.name}</h1>
                    <p className='text-sm text-neutral-400'>{e.shortDesc}</p>
                    <h1 className='my-2 text-blue-400'>See more...</h1>
                </div>

            </div>
        ))}
    </div>
  )
}

export default FindProduct