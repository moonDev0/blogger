import useAllPostStore from '@/store/allpoststore';
import Link from 'next/link';
import React, { useState } from 'react';
import Spinner from '@/lib/spinner';

const ViewAllposts = ({isLoading}) => {
  const { posts } = useAllPostStore();
  const [visiblePosts, setVisiblePosts] = useState(9);
  const [loading, setLoading] = useState(false);

  const loadMore = () => {
    setLoading(true);

    // Simulating a loading delay
    setTimeout(() => {
      setVisiblePosts((prevVisiblePosts) => prevVisiblePosts + 9);
      setLoading(false);
    }, 2000);
  };

  return (
    <div>
    {isLoading ? (
          <center className="relative top-[15rem]">
            <p className="mb-4 text-[1.5rem]">Please wait... Fetching all Blogposts...</p>
            <Spinner colour="blue" />
          </center>
        )
      : (
    <div>
      <div className='overf grid grid-cols-3 mt-20 gap-6 container mx-auto'>
        {posts.slice(0, visiblePosts).map((post) => (
          <div key={post.id} className='rounded-md shadow-lg my-10 hover:bg-[#dad7d7] bg-[#F5F5F5]'>
            <div data-aos="zoom-in">
              <div className='p-5 md:p-10'>
                <div className='rounded-3xl mx-auto'>
                  <h1 className='pb-3 text-[16px] text-black'>{post.title}</h1>
                </div>
              </div>
            </div>
            <div className='pb-5 w-full flex justify-between px-5'>
              <Link className='bg-blue-500 py-1 px-2 rounded-md text-white' href={`/${post.id}`}>
                view more
              </Link>
            </div>
          </div>
        ))}
      </div>

      {visiblePosts < posts.length && (
        <button className='text-white bg-blue-500 px-3 py-1 rounded-md' onClick={loadMore}>
          {loading ? <Spinner colour="blue" /> : 'Load More'}
        </button>
      )}
    </div>
      )
      }
    </div>
  );
};

export default ViewAllposts;
