import React from 'react'
import Sidebar from '../components/Sidebar'
import Trending from '../components/Trending'
import User from '../components/User'

const Profile = () => {
  return (
    <div className='flex max-w-[1000px] mx-auto'>
      <Sidebar />
      <User />
      <Trending />
    </div>
  )
}

export default Profile