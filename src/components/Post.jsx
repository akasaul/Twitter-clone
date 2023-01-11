import React from 'react'
import {FiMoreHorizontal} from "react-icons/fi";
import {BiBarChart} from "react-icons/bi";
import {FaRegComment, FaRetweet} from "react-icons/fa";
import {AiOutlineRetweet, AiOutlineHeart} from "react-icons/ai";
import {BsUpload} from "react-icons/bs";
import { Link } from 'react-router-dom';


const Post = ({photo, username, displayName, timestamp, article, img}) => {
  console.log(photo);
  return (
    <section className='border-b-[1px] p-2 border-stroke'>
      <div className='flex space-x-2 sm:space-x-7'>
        <img className='object-cover h-11 w-11 rounded-full' src={photo} alt="" />
          <div className='flex flex-col'>
            <div className='flex flex-1 hover:cursor-pointer items-center space-x-2'>
              <h3 className='text-[1rem] font-[700] hover:underline cursor-pointer'><Link to="/elonmusk">{displayName}</Link></h3>
              <p className='text-[0.9rem] font-[300] text-shy'>{`@${username.split("@")[0]}`}</p>
              <p className='text-[0.9rem] font-[300] text-shy'>.10min</p>
              <span className='flex-1'>
                <FiMoreHorizontal className='text-sm ml-auto font-[300] text-shy' />
              </span>
            </div>
              <p className='font-[400] leading-5 text-[15px] mb-3'>
                {article}
              </p>
             <img className='rounded-lg mb-3' src={img} alt="" />
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