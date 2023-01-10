import React from 'react'
import Sidebar from '../components/Sidebar'
import Feed from '../components/Feed'
import Trending from '../components/Trending'

const Home = () => {
  return (
    <div className='flex max-w-[1200px] mx-auto'>
      <Sidebar />
      <Feed />
      <Trending />
    </div>
  )
}

export default Home