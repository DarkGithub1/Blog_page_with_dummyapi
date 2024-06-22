import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import logo from "./../assets/1.png";

function BlogDetails() {
    const {id}=useParams();
    const [post,setPosts]=useState([])
   
    useEffect(() => {
        fetch(`https://dummyapi.online/api/blogposts/${id}`)
          .then((response) => response.json())
          .then((json) => setPosts(json));
      }, []);
  return (
    <div className='px-6 md:px-20 lg:px-56 mt-10'>
        <h3 className=' text-[40px] border-4 border-slate-800 h-44 flex items-center justify-center bg-slate-950 text-white p-6'> {post.title}</h3>
        <h3 className='text-[23px] font-bold text-center mt-4 underline'>{post.author}</h3>
        <div className='flex items-center mt-5'>
            <img src={logo}
            className='w-[35px] rounded-full'/>
            <div className='ml-2'>
                <h3 className='font-bold text-[12px]'>Coaching Detail</h3>
                <h3 className='text-gray-500 text-[10px]'>{post.date_published}</h3>
            </div>
            
        </div>
        <div className='mt-7 border-4 border-slate-800 h-44 flex items-center justify-center bg-slate-950 text-white p-6'>
                {
                    post.content
                }
            </div>
        
    </div>
  )
}

export default BlogDetails
