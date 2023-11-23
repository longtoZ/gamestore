'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import CategorySelection from '@/components/CategorySelection';
import ProductCard from '@/components/ProductCard';
import Carousel from '@/components/Carousel';
import LeftSideBar from '@/components/LeftSideBar';
import RightSideBar from '@/components/RightSideBar';

import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import ExtensionIcon from '@mui/icons-material/Extension';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

const Page: React.FC = () => {

  const router = useRouter();
  const categories = ['all', 'test1', 'test2', 'test3', 'test4'];

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState<string>(categories[0]);
  const [recommendedProducts, setRecommendedProducts] = useState<any>([])
  const [popularProducts, setPopularProducts] = useState<any>([])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/products/', {cache: "no-store"});
        const data = await response.json();
        setProducts(data);

        // Set filtered products for the default category "All"
        setFilteredProducts(data);
        setRecommendedProducts(handleRecommendedProducts(data))
        setPopularProducts(handlePopularProducts(data))
        
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleRecommendedProducts = (data: any) => {
    const totalItems = 6;
    const randomIndexes: number[] = []
    const final = []

    for (let i=0; i<totalItems; i++) {
      let index = Math.floor(Math.random() * data.length)
      while (randomIndexes.includes(index)) {
        index = Math.floor(Math.random() * data.length)
      }

      randomIndexes.push(index)
    }

    for (let i of randomIndexes) {
      final.push(data[i])
    }

    return final
  }

  const handlePopularProducts = (data: any) => {
    return [data[0], data[1], data[2], data[3], data[4], data[5]]
  }
  
  const handleSelectCategory = (category: string) => {
    setSelectedCategory(category);
    // Filter and set the products based on the selected category
    const filtered = category==categories[0] ? products : products.filter((product: any) => product.categories.includes(category.toLowerCase()));
    setFilteredProducts(filtered);
  };

  return (
    <div className='relative flex flex-row'>
      <div className='w-60'>
        <LeftSideBar/>
      </div>
      <div className="mt-20 mx-auto" style={{width:'65%'}}>
        <div className='w-full mx-auto relative overflow-hidden rounded-xl' style={{height:'30rem'}}>
          {/* <div className='z-10 absolute left-0 right-0 top-1/3'>
            <h1 className='text-8xl text-center font-extrabold'>Game Store</h1>
            <h1 className='text-6xl text-center font-semibold text-cyan-500'>Ultimate</h1>
            <div className='w-full flex justify-center'>
              <button className='w-40 mt-10 px-4 py-2 rounded-md cursor-pointer font-bold bg-gradient-to-br from-green-400 to-blue-500 text-white'>Explore ➤</button>
            </div>
          </div> */}
          <div>
            {/* <Carousel autoSlide={true} autoSlideInterval={50000} slides={slide_images} blur={true}/> */}
            <Swiper
            slidesPerView={1}
            spaceBetween={0}
            pagination={{clickable: true}}
            modules={[Pagination]}
            style={{height:'30rem'}}
            >
            {popularProducts.map((product: any) => (
              <SwiperSlide key={product}>
                <div className='absolute bottom-0 left-0 w-80 m-10 z-20'>
                  <h1 className='text-2xl my-4 font-bold'>{product.name}</h1>
                  <p className='opacity-70'>{product.shortDesc}</p>
                  <button className='bg-gradient-to-br from-green-400 to-blue-500 px-4 py-2 rounded-lg my-4 mx-2' onClick={() => router.push(`/products/${product._id}`)}>Buy now</button>
                  <button className='border px-4 py-2 rounded-lg mx-2'><AddCircleOutlineIcon style={{transform:'translateY(-0.1rem)', margin:'0 0.2rem'}}/>Add to wishlist</button>
                </div>
                <img src={product.backgroundURL} alt="" style={{filter:'brightness(0.5)'}}/>
              </SwiperSlide>
            ))}
            </Swiper>
          </div>
        </div>

        <div className='w-2/3 mx-auto grid grid-cols-4 gap-4 mt-10'>
          <div className='mx-auto w-32 h-32 rounded-lg text-center flex justify-center flex-col cursor-pointer cardElement' style={{background: '#1e1e1e'}}>
            <VideogameAssetIcon className='w-full text-5xl text-cyan-400'/>
            <p className='text-sm text-neutral-400 mt-1'>Consoles</p>
          </div>
          <div className='mx-auto w-32 h-32 rounded-lg text-center flex justify-center flex-col cursor-pointer cardElement' style={{background: '#1e1e1e'}}>
            <ExtensionIcon className='w-full text-5xl text-cyan-400'/>
            <p className='text-sm text-neutral-400 mt-1'>Games</p>
          </div>
          <div className='mx-auto w-32 h-32 rounded-lg text-center flex justify-center flex-col cursor-pointer cardElement' style={{background: '#1e1e1e'}}>
            <HeadphonesIcon className='w-full text-5xl text-cyan-400'/>
            <p className='text-sm text-neutral-400 mt-1'>Accessories</p>
          </div>
          <div className='mx-auto w-32 h-32 rounded-lg text-center flex justify-center flex-col cursor-pointer cardElement' style={{background: '#1e1e1e'}}>
            <AddShoppingCartIcon className='w-full text-5xl text-cyan-400'/>
            <p className='text-sm text-neutral-400 mt-1'>Deals</p>
          </div>
        </div>

        <div className='mt-36'>
          <div className='w-full flex justify-between my-6 mt-16'>
            <h1 className="text-4xl font-bold"><span className=' text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500'>Recommended</span> for you</h1>
            <a href="/products/category" className='flex items-center text-blue-500'>View more...</a>
          </div>
          <div>
            <Swiper
              slidesPerView={4}
              spaceBetween={20}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
              style={{height:'32rem'}}
            >
              {recommendedProducts.map((product: any) => (
                <SwiperSlide key={product}>
                  <ProductCard key={product._id} {...product} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

        </div>

        <div className='mt-10'>
          <div className='w-full flex justify-between my-6 mt-16'>
            <h1 className="text-4xl font-bold">Most <span className=' text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500'>popular</span> choices</h1>
            <a href="/products/category" className='flex items-center text-blue-500'>View more...</a>
          </div>
          <div>
            <Swiper
              slidesPerView={4}
              spaceBetween={20}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
              style={{height:'32rem'}}
            >
              {popularProducts.map((product: any) => (
                <SwiperSlide className='relative' key={product}>
                  <div className='w-full absolute top-0 left-0 z-10 bg-red-500 rounded-t-lg py-1'>
                    <h1 className='text-center text-lg'>Best seller</h1>
                  </div>
                  <ProductCard key={product._id} {...product} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

        </div>

        <div className='mt-10'>
          <h1 className="text-4xl font-bold my-4 mt-16">Category</h1>
          <CategorySelection categories={categories} onSelectCategory={handleSelectCategory} selectedCategory={selectedCategory}/>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredProducts.map((product: any) => (
              <ProductCard key={product._id} {...product} />
            ))}
          </div>
        </div>

      </div>
      <div className='w-72'>
        <RightSideBar/>
      </div>
    </div>
  );
};

export default Page;
