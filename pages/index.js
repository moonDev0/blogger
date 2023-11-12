import Image from 'next/image'
import { Inter } from 'next/font/google'
import useAllPostStore from '@/store/allpoststore'
import useSWR from 'swr'
import Navbar from '@/components/common/navbar'
import { fetchAllPost } from '@/utils/fetchAllPosts'
import { useEffect } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const {posts, savePosts} = useAllPostStore();

  useEffect(() => {
  
    fetchAllPost()
      .then((data) => {
       
        savePosts(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []); 


  
  return (
    <main
      className={` min-h-screen bg-next bg-contain bg-no-repeat flex-col items-center ${inter.className}`}
    >
     <Navbar/>

     <div className='grid grid-cols-3 mt-20 gap-6 container mx-auto'>
     {posts.slice(0,5).map((post) => (
       <div key={post.id} className=' shadow-xl mb-20 p-4 shadow-slate-700'>

         <h2 className='text-[13px]'>{post.title}</h2>
       
       </div>
     ))}
   </div>

     

    </main>
  )
}
