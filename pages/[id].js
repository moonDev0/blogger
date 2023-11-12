import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import useAllPostStore from '@/store/allpoststore';
import Navbar from '@/components/common/navbar';
import Link from 'next/link';
import { deletePost } from '@/utils/deletepost';

const BlogPost = () => {
  const { posts, removePost } = useAllPostStore();
  const router = useRouter();
  
  const { id } = router.query;
  const post = posts.find((post) => post.id === parseInt(id));
  if (!post) {
    return <div className='text-[40px]'>Post not found.</div>;
  }


  const handleDelete = async () => {
    try {
      await deletePost(post.id);
      // Assuming you have a removePost function in your store to update the state without making a new API request
      removePost(post.id);
      // Redirect to the home page or another appropriate page
      router.push('/');
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };


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
            <button onClick={handleDelete} className='bg-red-500 py-1 px-2 rounded-md text-white'>Delete</button>
        </div>
      </section>
     
    </div>
  );
};

export default BlogPost;