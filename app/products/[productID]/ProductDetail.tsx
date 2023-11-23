'use client'

import { Rating } from "@mui/material";
import React from "react";
import {useRouter} from 'next/navigation'
import Image from 'next/image'


import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation} from 'swiper/modules';

interface ProductDetailProps {
    product: any
}

interface TextWithParagraphsProps {
    text: string
}

interface TextWithBulletProps {
    text: string
}

const TextWithParagraphs: React.FC<TextWithParagraphsProps> = ({ text }) => {
    // Split the input text into an array of paragraphs using "\n" as the delimiter
    const paragraphs = text.split('\n');
  
    return (
      <div>
        {/* Map through the paragraphs and render each one in a new <p> tag */}
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>
            {paragraph}
            <br/>
          </p>
        ))}
      </div>
    );
};

const TextWithBullet: React.FC<TextWithBulletProps> = ({ text }) => {
    const paragraphs = text.split('\n');
  
    return (
      <ul className="list-disc px-4">
        {paragraphs.map((paragraph) => (
          <li key={paragraph}>
            {paragraph}
          </li>
        ))}
      </ul>
    );
};

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
    const router = useRouter()
    return (
        <div className="relative">
            <div className="fixed w-full top-0">
                <Image width={1000} height={1000} src={product.backgroundURL} alt="" className="w-full h-96 object-cover"/>
                <div className='z-10 absolute w-full h-52 bg-gradient-to-t from-neutral-900' style={{top:'11rem'}}></div>
            </div>
            <div className="relative mt-96">
                <div className="relative bg-neutral-900 bg-opacity-60 pt-4 backdrop-blur-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 w-2/3 mx-auto">
                        <div className="flex justify-center items-center">
                            <Image
                                width={1000} height={1000}
                                src={product.imageURL}
                                alt={product.name}
                                className="h-48 w-48 object-cover mb-4 rounded-lg"
                            />
                        </div>
                        <div>
                            <h1 className="text-3xl font-medium">{product.name}</h1>
                            <p className="text-sm text-neutral-400 mt-4">{product.shortDesc}</p>
                            <button onClick={() => router.push(`/payment/${product._id}`)} className='w-48 my-4 px-4 py-2 rounded-md cursor-pointer font-medium bg-gradient-to-br from-green-400 to-blue-500 text-white'>Buy at ${product.price}</button>
                            <div>
                                <Rating value={product.rating} readOnly/>
                            </div>
                        </div>
                    </div>
                    <div className="w-2/3 mx-auto text-neutral-300">
                        <div className="py-6 px-10 my-4 bg-neutral-800 bg-opacity-60 rounded-lg">
                            <h1 className="my-4 text-xl font-bold">Requirements</h1>
                            <div className="w-full mb-4" style={{border:'1px solid #a3a3a3'}}></div>
                            <h2 className="font-bold">Minimum:</h2>
                            <TextWithBullet text={product.requirements[0]}/>
                            <br/>
                            <h2 className="font-bold">Recommend:</h2>
                            <TextWithBullet text={product.requirements[1]}/>
                        </div>
                        <div className="py-6 px-10 my-4 bg-neutral-800 bg-opacity-60 rounded-lg">
                            <h1 className="my-4 text-xl font-bold">Screenshots</h1>
                            <div className="w-full mb-4" style={{border:'1px solid #a3a3a3'}}></div>
                            <div className="overflow-hidden rounded-lg">
                            <Swiper
                                slidesPerView={1}
                                spaceBetween={0}
                                pagination={{clickable: true}}
                                navigation={true}
                                loop={true}
                                modules={[Pagination, Navigation]}
                                style={{height:'35rem'}}
                                >
                                {product.screenshots.map((i:string) => (
                                <SwiperSlide key={i}>
                                    <Image width={1000} height={1000} src={i} alt="" style={{width:'100%'}}/>
                                </SwiperSlide>
                                ))}
                            </Swiper>
                            </div>
                        </div>
                        <div className="py-6 px-10 my-4 bg-neutral-800 bg-opacity-60 rounded-lg">
                            <h1 className="my-4 text-xl font-bold">Description</h1>
                            <div className="w-full mb-4" style={{border:'1px solid #a3a3a3'}}></div>
                            <TextWithParagraphs text={product.desc}/>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default ProductDetail