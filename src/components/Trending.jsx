import React from 'react'
import {FiSearch} from "react-icons/fi";
import {TbSettings} from "react-icons/tb";
import {FiMoreHorizontal} from "react-icons/fi";

const Trending = () => {
  return (
    <div className='hidden border-l-[1px] border-stroke w-[30%] min-w-[200px]  md:block h-screen'>
      <div className='bg-slate-300/20 px-3 mx-3 mt-2 rounded-full flex items-center space-x-2'>
        <FiSearch /> 
        <input type="text" placeholder='Search Twitter' className=' text-sm p-1 pl-3 bg-transparent rounded-full outline-none focus:outline-none border-none' />
      </div>


      <div className='bg-slate-300/10 mx-3 rounded'>
      <div className='flex p-3 items-center mt-5 justify-between mb-5 border-b-[1px] border-stroke'>
        <h3>Trends for you</h3>
        <TbSettings className='text-primary text-lg' />
      </div>
        <div className='flex p-3 items-center justify-between border-b-[1px] border-stroke'>
          <div>
            <p className='text-shy text-sm font-[400]'>Trending in Nigeria</p>
            <h3>Trends for you</h3>
            <p className='text-shy text-sm font-[400]'>Trending in Nigeria</p>
          </div>
          <FiMoreHorizontal className='text-primary text-lg self-top' />
        </div>

        <div className='flex p-3 items-center justify-between border-b-[1px] border-stroke'>
          <div>
            <p className='text-shy text-sm font-[400]'>Trending in Nigeria</p>
            <h3>Trends for you</h3>
            <p className='text-shy text-sm font-[400]'>Trending in Nigeria</p>
          </div>
          <FiMoreHorizontal className='text-primary text-lg self-top' />
        </div>

        <div className='flex p-3 items-center justify-between'>
          <div>
            <p className='text-shy text-sm font-[400]'>Trending in Nigeria</p>
            <h3>Trends for you</h3>
            <p className='text-shy text-sm font-[400]'>Trending in Nigeria</p>
          </div>
          <FiMoreHorizontal className='text-primary text-lg self-start' />
        </div>

      </div>

    </div>
  )
}

export default Trending