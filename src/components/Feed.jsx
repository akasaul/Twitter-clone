import React from 'react'
import Post from './Post'

const Feed = () => {
  return (
    <div className='w-full'>
      <div className='flex items-center p-2 border-b-[1px] border-stroke justify-between'>
        <h3>Home</h3>
        <img src="/images/magic.svg" alt="" />
      </div>

      <section className='border-b-[1px] p-2 mb-2 space-x-3 border-stroke flex'>
          <img className='object-cover h-11 w-11 rounded-full' src="https://wegotthiscovered.com/wp-content/uploads/2022/08/Tristan-Tate-Instagram.jpg?resize=640,360" alt="" />
          <div className='flex-1 h-24 flex flex-col justify-center'>
            <input type="text" placeholder="What's happening?" className='w-32 border-none focus:outline-none sm:w-48 mb-6 text-[0.9rem] font-[400] bg-transparent' />
            <div className='flex items-center justify-between'>
              <div className='flex space-x-3 cursor-pointer'>
                <img className='h-4 sm:h-5' src="/images/photo.svg" alt="" />
                <img className='h-4 sm:h-5' src="/images/gif.svg" alt="" />
                <img className='h-4 sm:h-5' src="/images/bars.svg" alt="" />
                <img className='h-4 sm:h-5' src="/images/emoji.svg" alt="" />
                <img className='h-4 sm:h-5' src="/images/date.svg" alt="" />
              </div>
              <button className='bg-primary px-3 py-1 rounded-full'>Tweet</button>
            </div>
          </div>
      </section>
      <Post />
      <Post />
      <Post />
    </div>
  )
}

export default Feed