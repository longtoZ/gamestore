import React, { useState } from 'react'
import User from '@/components/User'
import { getServerSession } from "next-auth"
import { authOptions } from '../api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'
import clientPromise from "@/lib/mongodb"
import EditPopup from '@/components/EditProduct'
import AddProduct from '@/components/AddProduct'
import DeleteProduct from '@/components/DeleteProduct'
import Image from 'next/image'


interface ProductCardProps {
  _id: string;
  name: string;
  category: string;
  price: string;
  imageURL: string;
  rating: string;
  desc:string;
  backgroundURL:string;
  shortDesc:string;
  screenshots: string[];
  requirements: string[]
}


const ProductCard: React.FC<ProductCardProps> = ({
  _id,
  name,
  category,
  price,
  imageURL,
  rating,
  desc,
  backgroundURL,
  shortDesc,
  screenshots,
  requirements
}) => {
  return (
    <div className="overflow-hidden w-full bg-neutral-800 my-4 rounded-lg p-4 bg-opacity-60 relative">
      <div className="absolute w-full h-full -z-10 top-0 left-0" style={{backgroundImage:`url("${backgroundURL}")`, filter:'blur(5px)'}}></div>
      <div className="flex flex-row">
        <Image width={1000} height={1000} src={imageURL} className="h-48 w-48 object-cover rounded-lg" alt="img"/>
        <div className="flex-1 p-4">
          <h2 className="text-lg font-bold">{name}</h2>
          <p className="text-gray-400">{shortDesc}</p>
          <p className="mt-4 font-bold">${price}</p>
          <p className="mt-2">{category}</p>
          {/* <AccordionItem title="Long description" content={desc}/> */}
          <div className="flex justify-end mt-4">
            <EditPopup _id={_id} name={name} category={category} price={price} imageURL={imageURL} rating={rating} desc={desc} backgroundURL={backgroundURL} shortDesc={shortDesc} screenshots={screenshots} requirements={requirements}/>
            <DeleteProduct _id={_id}/>
          </div>
        </div>
      </div>
    </div>
  )
}

const page = async () => {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect('/signin')
  } 

  const getProduct = async () => {
    const client = await clientPromise;
    const db = client.db();
    const product = await db.collection('New').find({}).toArray();
  
    return {
        props: {
            product,
        }
    }
  }
  

  const p = await getProduct()
  const products = p['props']['product']

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className='mt-20 text-center text-4xl font-extrabold'>Administrator page</h1>
      <User/>
      <AddProduct/>
      <h1 className="text-3xl font-bold">Products</h1>

      <div className="flex flex-wrap">
        {products.map((product: any) => (
          <ProductCard key={product._id} {...product} />
        ))}
      </div>
    </div>
  )
}

export default page;