// components/LeftSideBar.tsx
import React from 'react';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import Image from 'next/image';


const RightSideBar = () => {
  return (

    <div className="overflow-hidden fixed top-0 right-0 w-72 h-screen bg-neutral-900 py-4 px-6 shadow-md z-20 border-l-4 border-neutral-800">
        <div className='flex justify-end w-full'>
            <h1 className='mx-4 font-bold' style={{transform:'translateY(0.5rem)'}}>Long To</h1>
            <Image src="https://i.pinimg.com/originals/7e/7f/85/7e7f8539879d418e36154b1837a8abdd.jpg" alt="" className='w-10 h-10 rounded-full'/>
        </div>

        <div className='mt-20'>
            <h1 className='font-bold text-lg'>Top developers</h1>
            <div className="absolute w-20 h-20 bg-purple-300 rounded-full filter blur-3xl opacity-70 animate-blob"></div>
            <ul className='mt-2'>
                <li className="mb-2 flex p-3 rounded-lg bg-neutral-800 transition ease-in-out duration-200">
                    <Image src="https://i.pinimg.com/originals/5f/9a/db/5f9adb90b78ee882768b1d5be8dc1c88.jpg" alt="" className='w-10 h-10 rounded-full mx-2' style={{transform:'translateY(0.5rem)'}}/>
                    <div>
                        <a href="/" className="block p-2 font-semibold">User 1</a>  
                        <p className='text-xs text-neutral-400 px-2'>Earned 1000 points!</p>
                    </div>
                </li>

                <li className="mb-2 flex p-3 rounded-lg bg-neutral-800 transition ease-in-out duration-200">
                    <Image src="https://i.pinimg.com/originals/c4/e7/fb/c4e7fb53c319dc818fa9bdc7ee409517.jpg" alt="" className='w-10 h-10 rounded-full mx-2' style={{transform:'translateY(0.5rem)'}}/>
                    <div>
                        <a href="/" className="block p-2 font-semibold">User 2</a>  
                        <p className='text-xs text-neutral-400 px-2'>Earned 800 points!</p>
                    </div>
                </li>

                <li className="mb-2 flex p-3 rounded-lg bg-neutral-800 transition ease-in-out duration-200">
                    <Image src="https://i.pinimg.com/originals/73/07/e3/7307e31f753194eecc7c1eb3c358afae.jpg" alt="" className='w-10 h-10 rounded-full mx-2' style={{transform:'translateY(0.5rem)'}}/>
                    <div>
                        <a href="/" className="block p-2 font-semibold">User 3</a>  
                        <p className='text-xs text-neutral-400 px-2'>Earned 700 points!</p>
                    </div>
                </li>

                <li className="mb-2 flex p-3 rounded-lg bg-neutral-800 transition ease-in-out duration-200">
                    <Image src="https://i.pinimg.com/originals/a9/93/c3/a993c386546beeee680bb455c20b9c6b.jpg" alt="" className='w-10 h-10 rounded-full mx-2' style={{transform:'translateY(0.5rem)'}}/>
                    <div>
                        <a href="/" className="block p-2 font-semibold">User 4</a>  
                        <p className='text-xs text-neutral-400 px-2'>Earned 700 points!</p>
                    </div>
                </li>
            </ul>
            <div className="absolute right-0 w-20 h-20 bg-blue-300 rounded-full filter blur-3xl opacity-70 animate-blob animation-delay-2000" style={{transform:'translateY(-5rem)'}}></div>
            
        </div>

        <div className='mt-10'>
            <button className='border p-4 w-full rounded-lg border-neutral-500 text-neutral-400 cursor-pointer'>Show more</button>
        </div>

        <div className="absolute right-0 bottom-0 p-3 mb-4 mx-4 text-center flex rounded-lg hover:bg-neutral-800 transition ease-in-out duration-200">
            <a href="#" className="block p-2 font-semibold">Logout</a>
            <LogoutIcon className="mr-4" style={{transform:'translateY(0.5rem)'}}/>
        </div>
    </div>


  );
};

export default RightSideBar;
