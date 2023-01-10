import React from 'react'
import {SlCalender} from "react-icons/sl";
import {BiArrowBack} from "react-icons/bi";
import {GoVerified} from "react-icons/go";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from '../store/auth/authSlice';
import { useNavigate } from 'react-router-dom';

const User = () => {
  const userInfo = useSelector(selectUser);
  const navigate = useNavigate();
  return (
    <div className='flex-1 relative'>
      {
        !userInfo && navigate("/")
      }
      <div className='cover relative cursor-pointer h-48 w-[100%]' style={{
    	backgroundImage: `url("https://img.freepik.com/free-photo/group-elephants-big-green-tree-wilderness_181624-16897.jpg?w=900&t=st=1673247551~exp=1673248151~hmac=a101bd03cc2a60b3bae6b4b2dfb7f996f427390889a33c1b20dddda5c8b1cd9c")`
      }}>
        <img className='object-cover absolute bottom-[-25%] profile-pic rounded-full border-2 -mt-11 ml-3' src={userInfo?.photoURL} alt="" />
        <button className='p-2 px-3 bg-primary text-white rounded-full absolute bottom-[-60px] right-[20px]'>Follow</button>
      </div>
      
      <div className='mt-16 px-5'>
        <span className='flex items-center space-x-1'>
              <h3 className='text-lg'>{userInfo?.displayName}</h3> 
                <GoVerified className='text-primary' /> 
        </span>
        <p className='font-[300] text-shy'>@elonmusk</p>
        <div className='flex flex-col items-start mt-5'>
          <div className='flex  items-center space-x-2'>
            <SlCalender className='text-shy' />
            <p className='font-[300] text-shy'>Joined June 2009</p>
          </div>
          <p className='font-[500]'>I wanna die on planet mars folks!</p>
          <div className='flex items-center mt-3 space-x-5'>
            <p>168 <span className='font-[300] text-shy'>Following</span></p>
            <p>125M <span className='font-[300] text-shy'>Followers</span></p>
          </div>
        </div>
      </div>
      <div className='absolute backdrop-blur space-x-9 pl-5  top-0 flex items-center left-0 right-0 bg-black/90'>
        <span  className='cursor-pointer p-2 rounded-full  hover:bg-slate-300/10'>
          <Link to="/">
            <BiArrowBack />
          </Link>
        </span>
        <div className='cursor-pointer'>
         <span className='flex items-center space-x-1'>
              <h3 className='text-lg'>{userInfo?.displayName}</h3> 
                <GoVerified className='text-primary' /> 
            </span>
          <p className='font-[400] text-shy'>22K Tweets</p>
        </div>
      </div>
    </div>
  )
}

export default User