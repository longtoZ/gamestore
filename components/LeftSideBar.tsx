// components/LeftSideBar.tsx
import React from 'react';
import Link from 'next/link';
import HomeIcon from '@mui/icons-material/Home';
import CategoryIcon from '@mui/icons-material/Category';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import CreateIcon from '@mui/icons-material/Create';
import SettingsIcon from '@mui/icons-material/Settings';

const LeftSideBar = () => {
  return (

    <div className="overflow-hidden fixed top-0 left-0 w-60 h-screen bg-neutral-900 p-4 shadow-md z-20 border-r-4 border-neutral-800">
        <Link href="/" className="text-white text-2xl font-bold">
            Logo
        </Link>

        <ul className='mt-10'>
            <li className="mb-2 flex px-3 rounded-lg hover:bg-neutral-800 transition ease-in-out duration-200">
                <HomeIcon className="mr-4" style={{transform:'translateY(0.5rem)'}}/>
                <a href="/" className="block p-2 font-semibold">Home</a>
            </li>

            <li className="mb-2 flex px-3 rounded-lg hover:bg-neutral-800 transition ease-in-out duration-200">
                <CategoryIcon className="mr-4" style={{transform:'translateY(0.5rem)'}}/>
                <a href="/products" className="block p-2 font-semibold">Products</a>
            </li>

            <li className="mb-2 flex px-3 rounded-lg hover:bg-neutral-800 transition ease-in-out duration-200">
                <LiveTvIcon className="mr-4" style={{transform:'translateY(0.5rem)'}}/>
                <a href="/live" className="block p-2 font-semibold">Live</a>
            </li>

            <li className="mb-2 flex px-3 rounded-lg hover:bg-neutral-800 transition ease-in-out duration-200">
                <CreateIcon className="mr-4" style={{transform:'translateY(0.5rem)'}}/>
                <a href="/blogs" className="block p-2 font-semibold">Blogs</a>
            </li>
        </ul>

        <div className='bg-neutral-800 p-4 rounded-lg mt-10'>
            <div className="absolute w-20 h-20 bg-blue-300 rounded-full filter blur-3xl opacity-70 animate-blob"></div>
            <p className='mb-3'>Not a member?</p>
            <p className='text-sm text-neutral-400'>Please consider to subscribe us to get more benefits in the future!</p>
            <p className='text-right mt-6'>
                <a href="/subscribe" className='p-2 rounded-lg text-sm text-blue-500 border border-blue-500'>Learn more</a>
            </p>
        </div>

        <div className="absolute bottom-0 p-3 mb-4 text-center flex rounded-lg hover:bg-neutral-800 transition ease-in-out duration-200">
            <SettingsIcon className="mr-4" style={{transform:'translateY(0.5rem)'}}/>
            <a href="#" className="block p-2 font-semibold">Setting</a>
        </div>
    </div>


  );
};

export default LeftSideBar;
