import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import useAllPostStore from '@/store/allpoststore';
import Navbar from '@/components/common/navbar';
import Link from 'next/link';

const BlogPost = () => {
  const { posts } = useAllPostStore();
  const router = useRouter();
  
  const { id } = router.query;
  const post = posts.find((post) => post.id === parseInt(id));
  if (!post) {
    return <div className='text-[40px]'>Post not found.</div>;
  }


  return (
    <div className='w-full h-screen top-0 bg-next bg-cover bg-no-repeat'>
    <Head>
    <title>blog || {post.title}</title>
    </Head>
      
    <Navbar/>

      
      <section className='container mx-auto mt-20 px-10 md:px-0 mb-10 '>
      <div>
        <Link href='/' >
        <button className='bg-white py-1 px-2 mb-10 rounded-md text-black'>back</button>
                   
        </Link>
      </div>
         
         <div>
            <h1 className='text-[20px] text-white'>{post.title}</h1>
            <p className='text-[15px] text-white'>{post.body}</p>

         </div>

        <div className='mt-10'>
            <button className='bg-red-500 py-1 px-2 rounded-md mr-10 text-white'>edit</button>
            <button className='bg-red-500 py-1 px-2 rounded-md text-white'>delete</button>
        </div>
      </section>
     
    </div>
  );
};

export default BlogPost;