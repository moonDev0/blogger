import useAllPostStore from '@/store/allpoststore'
import Link from 'next/link';
import React, { useState } from 'react'

const ViewAllposts = () => {
    const {posts} = useAllPostStore();
    const [visiblePosts, setVisiblePosts] = useState(9); 

    const loadMore = () => {
      setVisiblePosts((prevVisiblePosts) => prevVisiblePosts + 9); 
    };

  return (
    <div>

     <div className=' overf grid grid-cols-3 mt-20 gap-6 container mx-auto'>
     {posts.slice(0, visiblePosts).map((post) => (
            <div data-aos="zoom-in" key={post.id} className='rounded-md shadow-lg my-10 hover:bg-[#dad7d7] bg-[#F5F5F5]'>
              
                <i>
                  <div className='p-5 md:p-10]'>
                    <div className='rounded-3xl  mx-auto'>
                      <h1 className='pb-3 text-[16px] text-black '>{post.title}</h1>
                      <p className='font-[500] text-[13px] md:text-[16px] leading-[24px] text-justify'></p>
                    </div>
                  </div>
                </i>
                <div className='pb-5 w-full flex justify-between px-5'>
                    <Link className='bg-blue-500 py-1 px-2 rounded-md text-white' href={`/${post.id}`}>view more </Link>
                </div>
            </div>
          ))}
   </div>
        {visiblePosts < posts.length && (
          <button className='text-white bg-blue-500 px-3 py-1 rounded-md' onClick={loadMore}>Load More</button>
        )}
    </div>
  )
}

export default ViewAllposts


