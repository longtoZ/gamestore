// components/ProductCard.tsx

import React from 'react';
import Link from 'next/link';
import {Rating} from '@mui/material';
import { useRouter } from 'next/navigation';

interface ProductCardProps {
  _id: number;
  name: string;
  price: number;
  imageURL: string;
  category: string;
  rating: number;
}


const ProductCard: React.FC<ProductCardProps> = ({
  _id,
  name,
  price,
  imageURL,
  category,
  rating
}) => {

  const router = useRouter();

  return (
    <div className="bg-neutral-800 rounded-lg shadow-md cursor-pointer overflow-hidden relative" onClick={() => router.push(`/products/${_id}`)}>
        <div className='relative'>
          <img
            src={`${imageURL}`}
            alt={name}
            className="w-full h-60 object-coverrounded-2xl overflow-hidden"
          />
          <div className='z-10 absolute bottom-0 w-full h-48 bg-gradient-to-t from-neutral-800'></div>
        </div>
        
        <div className='p-6'>
          <h2 className="text-2xl font-bold text-neutral">{name}</h2>
          <p className="text-neutral-200">${price}</p>
          <p className="text-sm text-neutral-400 mt-2">{category}</p>
          
          <div className="flex justify-between items-center mt-4">
            <Rating value={rating} className='mt-3'readOnly/>
            <button className='py-2 px-4 bg-transparent text-blue-500 border border-blue-500 rounded hover:bg-blue-500 hover:text-neutral-200 hover:border-transparent transition ease-in-out'>See more</button>
          </div>
        </div>

    </div>
  );
};

export default ProductCard;
