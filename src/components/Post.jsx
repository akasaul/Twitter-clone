import React from 'react'
import {FiMoreHorizontal} from "react-icons/fi";
import {BiBarChart} from "react-icons/bi";
import {FaRegComment, FaRetweet} from "react-icons/fa";
import {AiOutlineRetweet, AiOutlineHeart} from "react-icons/ai";
import {BsUpload} from "react-icons/bs";
import { Link } from 'react-router-dom';


const Post = () => {
  return (
    <section className='border-b-[1px] p-2 border-stroke'>
      <div className='flex space-x-2 sm:space-x-7'>
        <img className='object-cover h-11 w-11 rounded-full' src="https://i.guim.co.uk/img/media/28ee11b8843ae00a551486e6a6c639fa68b0338f/0_273_3300_1980/master/3300.jpg?width=620&quality=85&dpr=1&s=none" alt="" />
          <div className='flex flex-col'>
            <div className='flex flex-1 hover:cursor-pointer items-center space-x-2'>
              <h3 className='text-[1rem] font-[700] hover:underline cursor-pointer'><Link to="/elonmusk">Nikodimos</Link></h3>
              <p className='text-[0.9rem] font-[300] text-shy'>@akasaul</p>
              <p className='text-[0.9rem] font-[300] text-shy'>.10m</p>
              <span className='flex-1'>
                <FiMoreHorizontal className='text-sm ml-auto font-[300] text-shy' />
              </span>
            </div>
              <p className='font-[400] leading-5 text-[15px] mb-3'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo non reiciendis obcaecati quidem neque optio laborum nulla enim, quia possimus.
              </p>
             <img className='rounded-lg mb-3' src="https://i.guim.co.uk/img/media/28ee11b8843ae00a551486e6a6c639fa68b0338f/0_273_3300_1980/master/3300.jpg?width=620&quality=85&dpr=1&s=none" alt="" />
             <div className='flex items-center justify-around'>
                <span className='p-2 rounded-full flex items-center space-x-2 cursor-pointer hover:bg-slate-300/5 hover:text-primary'>
                  <BiBarChart />
                  <p className='font-[300] hidden sm:block text-[0.8rem]'>5.9M</p>
                </span>
                <span className='p-2 rounded-full flex items-center space-x-2 cursor-pointer hover:bg-slate-300/5 hover:text-primary'>
                  <FaRegComment />
                  <p className='font-[300] block text-[0.8rem]'>3.3K</p>
                </span>
                <span className='p-2 rounded-full flex items-center space-x-2 cursor-pointer hover:bg-slate-300/5 hover:text-green-600'>
                  <FaRetweet />
                  <p className='font-[300] hidden sm:block text-[0.8rem]'>49.2K</p>
                </span>
                <span className='p-2 rounded-full flex items-center space-x-2 cursor-pointer hover:bg-slate-300/5 hover:text-red-600'>
                  <AiOutlineHeart />
                  <p className='font-[300] block text-[0.8rem]'>322K</p>
                </span>
                <span className='p-2 rounded-full flex items-center space-x-2 cursor-pointer hover:bg-slate-300/5 hover:text-primary'>
                  <BsUpload />
                  <p className='font-[300] hidden sm:block text-[0.8rem]'>10K</p>
                </span>
             </div>
          </div>
      </div>

    </section>
  )
}

export default Post