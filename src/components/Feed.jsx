import React from 'react'
import Post from './Post'
import { useSelector } from 'react-redux';
import { selectUser } from '../store/auth/authSlice';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost, setPost } from '../store/post/postActions';
import { useEffect } from 'react';
import { selectPost } from '../store/post/postSlice';
import { db } from '../firebase';
import { onSnapshot, collection } from 'firebase/firestore';


const Feed = () => {

  const [posts, setPosts] = useState([]);

  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const [post, setPost] = useState("");
  const userObj = user && {
    name: user?.displayName,
    photo: user?.photoURL,
    username: user?.email
  };

  const handleClick = () => {
    dispatch(addPost({
      ...userObj,
      img: "",
      article: post
    }
    ));
  setPost('');
  }

  // const posts = useSelector(selectPost);

  useEffect(() => {
    onSnapshot(collection(db, "posts"), (snapshot) => {
        snapshot.docs.map((doc) => setPosts([posts, doc.data()]));
      })
  }, []);

  return (
    <div className='w-full'>
      <div className='flex items-center p-2 border-b-[1px] border-stroke justify-between'>
        <h3>Home</h3>
        <img src="/images/magic.svg" alt="" />
      </div>

      {
        user && 
        <section className='border-b-[1px] p-2 mb-2 space-x-3 border-stroke flex'>
            <img className='object-cover h-11 w-11 rounded-full' src={user?.photoURL} alt="" />
            <div className='flex-1 h-24 flex flex-col justify-center'>
              <input type="text" placeholder="What's happening?" value={post} onChange={(e) => setPost(e.target.value)} className='w-32 border-none focus:outline-none sm:w-48 mb-6 text-[0.9rem] font-[400] bg-transparent' />
              <div className='flex items-center justify-between'>
                <div className='flex space-x-3 cursor-pointer'>
                  <img className='h-4 sm:h-5' src="/images/photo.svg" alt="" />
                  <img className='h-4 sm:h-5' src="/images/gif.svg" alt="" />
                  <img className='h-4 sm:h-5' src="/images/bars.svg" alt="" />
                  <img className='h-4 sm:h-5' src="/images/emoji.svg" alt="" />
                  <img className='h-4 sm:h-5' src="/images/date.svg" alt="" />
                </div>
                <button className='bg-primary px-3 py-1 rounded-full' disabled={post.length === 0} style={{
                  background: post.length === 0 && "#333"
                }} onClick={handleClick}>Tweet</button>
              </div>
            </div>
        </section>
      }
      {
        posts.map((post) => {
          <Post />
        })
      }
    </div>
  )
}

export default Feed