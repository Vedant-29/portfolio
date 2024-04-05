import React from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { FaYoutube } from "react-icons/fa6";
import { IoSearchSharp } from "react-icons/io5";
import { FaMicrophone } from "react-icons/fa";
import { FaCamera } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";





export default function Navbar() {
  return (
    <div className='flex justify-between px-14 h-14 items-center bg-[#212121] opacity-95 sticky'>
        <div className='flex gap-8 items-center text-2xl text-white'>
            <div>
                <GiHamburgerMenu />
            </div>
            <div className='flex gap-2 items-center justify-center'> 
                <FaYoutube className='text-3xl text-red-500'/>
                <span className='text-2xl font-bold'>Youtube</span>
            </div>
        </div>
        <div className='flex items-center justify-center gap-5'>
            <form>
                <div>
                    <div className='flex items-center bg-zinc-900 items-center h-10 px-2 rounded-xl'>
                        <input type='text' placeholder='Search' className='w-96 bg-zinc-900 text-white p-1 focus:outline-none border-none'/>
                        <button>
                            <IoSearchSharp className='flex item-center'/>
                        </button>
                    </div>
                </div>
            </form>
            <div className='text-xl p-3 bg-zinc-900 rounded-full'>
                <FaMicrophone />
            </div>
        </div>
        <div className='flex items-center justify-center gap-5'>
            <FaCamera />
            <div className='relative'>
                <IoNotifications />
                <span className='absolute bottom-2 left-2 text-xs bg-red-600 rounded-full px-1'>9+</span>
            </div>
            <img src="https://cdn.pixabay.com/photo/2017/03/16/21/18/logo-2150297_640.png" alt="profile-page" className='w-9 h-9 rounded-full' />
        </div>
    </div>
        
  );
}