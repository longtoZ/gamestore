'use client'

import { Rating } from "@mui/material";
import React from "react";
import {useRouter} from 'next/navigation'
import Image from 'next/image'

import StarIcon from '@mui/icons-material/Star';

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
                        <div className="py-6 px-10 my-4 bg-neutral-800 bg-opacity-60 rounded-lg">
                            <h1 className="my-4 text-xl font-bold">Ratings and reviews</h1>
                            <div className="w-full mb-4" style={{border:'1px solid #a3a3a3'}}></div>
                            
                            <div className="flex">
                                <div className="my-auto text-center mx-4" style={{width:'20%'}}>
                                    <h1 className="text-6xl font-bold">4.0</h1>
                                    <p className="text-neutral-400">1,004 ratings</p>
                                </div>
                                <div style={{width:'80%'}}>
                                    <div className="flex items-center">
                                        <div className='mx-2' style={{width:'10%'}}>
                                            <span className='text-neutral-400 px-1'>5</span>
                                            <StarIcon className='text-yellow-500 text-base'/>
                                        </div>
                                        <div className="h-2 w-full rounded-xl bg-yellow-800 relative">
                                            <div className="h-2 w-2/3 rounded-xl bg-yellow-500 absolute top-0 left-0 z-10"></div>

                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <div className='mx-2' style={{width:'10%'}}>
                                            <span className='text-neutral-400 px-1'>4</span>
                                            <StarIcon className='text-yellow-500 text-base'/>
                                        </div>
                                        <div className="h-2 w-full rounded-xl bg-yellow-800 relative">
                                            <div className="h-2 w-1/2 rounded-xl bg-yellow-500 absolute top-0 left-0 z-10"></div>

                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <div className='mx-2' style={{width:'10%'}}>
                                            <span className='text-neutral-400 px-1'>3</span>
                                            <StarIcon className='text-yellow-500 text-base'/>
                                        </div>
                                        <div className="h-2 w-full rounded-xl bg-yellow-800 relative">
                                            <div className="h-2 w-1/3 rounded-xl bg-yellow-500 absolute top-0 left-0 z-10"></div>

                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <div className='mx-2' style={{width:'10%'}}>
                                            <span className='text-neutral-400 px-1'>2</span>
                                            <StarIcon className='text-yellow-500 text-base'/>
                                        </div>
                                        <div className="h-2 w-full rounded-xl bg-yellow-800 relative">
                                            <div className="h-2 w-1/4 rounded-xl bg-yellow-500 absolute top-0 left-0 z-10"></div>

                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <div className='mx-2' style={{width:'10%'}}>
                                            <span className='text-neutral-400 px-1'>1</span>
                                            <StarIcon className='text-yellow-500 text-base'/>
                                        </div>
                                        <div className="h-2 w-full rounded-xl bg-yellow-800 relative">
                                            <div className="h-2 w-1/4 rounded-xl bg-yellow-500 absolute top-0 left-0 z-10"></div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <div className=" mt-8 w-full mb-4" style={{borderBottom:'1px solid #a3a3a3'}}></div> */}

                            <div>
                                <div className="flex mt-14 px-2">
                                    <div style={{width:'90%'}}>
                                        <input className='w-full rounded-full bg-black bg-opacity-20 p-2' type="text" placeholder="Write your thoughts..." />
                                    </div>
                                    <div className='px-2' style={{width:'10%'}}>
                                        <button className='w-full px-3 py-2 rounded-full bg-gradient-to-br from-green-400 to-blue-500 text-white'>Post</button>
                                    </div>
                                </div>


                                <div className="mt-10 px-4">
                                    <div className="mb-10">
                                        <ul className="list-disc">
                                            <li className="text-neutral-400">LongTo <span className="px-4 text-neutral-500 text-sm">1 month ago</span></li>
                                        </ul>
                                        <h1 className="text-xl font-bold">Very attractive gameplay</h1>
                                        <Rating className='text-sm mb-4' value={product.rating} readOnly/>
                                        <p className="">I have been playing this game for a month but it is still so interesting. I wanna share this game to my friends!!!</p>
                                    </div>

                                    <div className="mb-10">
                                        <ul className="list-disc">
                                            <li className="text-neutral-400">RandomUser123  <span className="px-4 text-neutral-500 text-sm">2 weeks ago</span></li>
                                        </ul>
                                        <h1 className="text-xl font-bold">Cant stop playing this game</h1>
                                        <Rating className='text-sm mb-4' value={product.rating} readOnly/>
                                        <p className="">I spend 2 hours per day just to discover new things in the game. I hope the developer will make more stuff for us to try out!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default ProductDetail