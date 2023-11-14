'use client';

import React, { useEffect, useState } from 'react';
import CategorySelection from '../../components/CategorySelection';
import ProductCard from '../../components/ProductCard';
import Carousel from '../../components/Carousel';

import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import ExtensionIcon from '@mui/icons-material/Extension';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const Page: React.FC = () => {

  const categories = ['all', 'test1', 'test2', 'test3', 'test4'];
  const slide_images = [
  'https://cdn.discordapp.com/attachments/1173115642145153115/1173116408570327091/minecraft-background.jpg',
  'https://cdn.discordapp.com/attachments/1173115642145153115/1173116409182683146/4k-call-of-duty-car-chase-7g9k0kcxxkyiazu5.jpg',
  'https://cdn.discordapp.com/attachments/1173115642145153115/1173116410118025348/little-nightmares-big-black-hands-zrg3whxcn5olvtmv.jpg',
  'https://cdn.discordapp.com/attachments/1173115642145153115/1173116410751369298/587593.png',
  'https://cdn.discordapp.com/attachments/1173115642145153115/1173116411321790545/gta-5-qpjtjdxwbwrk4gyj.jpg']

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState<string>(categories[0]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/products/', {cache: "no-store"});
        const data = await response.json();
        setProducts(data);

        // Set filtered products for the default category "All"
        setFilteredProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);


  
  const handleSelectCategory = (category: string) => {
    setSelectedCategory(category);
    // Filter and set the products based on the selected category
    const filtered = category==categories[0] ? products : products.filter((product: any) => product.categories.includes(category.toLowerCase()));
    setFilteredProducts(filtered);
  };

  return (
      <div className="mt-8">
        <div className='lg:w-2/3 md:w-full mx-auto relative'>
          <div className='z-10 absolute top-0 w-full h-44 bg-gradient-to-b from-neutral-900'></div>
          <div className='z-10 absolute left-0 right-0 top-1/3'>
            <h1 className='text-8xl text-center font-extrabold'>Game Store</h1>
            <h1 className='text-6xl text-center font-semibold text-cyan-500'>Ultimate</h1>
            <div className='w-full flex justify-center'>
              <button className='w-40 mt-10 px-4 py-2 rounded-md cursor-pointer font-bold bg-gradient-to-br from-green-400 to-blue-500 text-white'>Explore ➤</button>
            </div>
          </div>
          <Carousel autoSlide={true} autoSlideInterval={3000} slides={slide_images} blur={true}/>
          <div className='z-10 absolute bottom-0 w-full h-44 bg-gradient-to-t from-neutral-900 '></div>
        </div>

        <div className='w-2/3 mx-auto grid grid-cols-4 gap-4 mt-10'>
          <div className='w-32 h-32 rounded-lg text-center flex justify-center flex-col cursor-pointer cardElement' style={{background: '#1e1e1e'}}>
            <VideogameAssetIcon className='w-full text-5xl text-cyan-400'/>
            <p className='text-sm text-neutral-400 mt-1'>Consoles</p>
            </div>
          <div className='w-32 h-32 rounded-lg text-center flex justify-center flex-col cursor-pointer cardElement' style={{background: '#1e1e1e'}}>
            <ExtensionIcon className='w-full text-5xl text-cyan-400'/>
            <p className='text-sm text-neutral-400 mt-1'>Games</p>
            </div>
          <div className='w-32 h-32 rounded-lg text-center flex justify-center flex-col cursor-pointer cardElement' style={{background: '#1e1e1e'}}>
            <HeadphonesIcon className='w-full text-5xl text-cyan-400'/>
            <p className='text-sm text-neutral-400 mt-1'>Accessories</p>
            </div>
          <div className='w-32 h-32 rounded-lg text-center flex justify-center flex-col cursor-pointer cardElement' style={{background: '#1e1e1e'}}>
            <AddShoppingCartIcon className='w-full text-5xl text-cyan-400'/>
            <p className='text-sm text-neutral-400 mt-1'>Deals</p>
            </div>
        </div>

        <div className='mx-20 mt-36'>
          <h1 className="text-4xl font-bold my-4 mt-16">Category</h1>
          <CategorySelection categories={categories} onSelectCategory={handleSelectCategory} selectedCategory={selectedCategory}/>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {filteredProducts.map((product: any) => (
            <ProductCard key={product._id} {...product} />
          ))}
          </div>
        </div>

      </div>
  );
};

export default Page;
