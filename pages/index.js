import Image from 'next/image'
import { Inter } from 'next/font/google'
import useAllPostStore from '@/store/allpoststore'
import useSWR from 'swr'
import Navbar from '@/components/common/navbar'
import { fetchAllPost } from '@/utils/fetchAllPosts'
import { useEffect } from 'react'
import Link from 'next/link'
import ViewAllposts from '@/components/blogs/viewAllposts'



export default function Home() {
  const {posts, savePosts} = useAllPostStore();

  // useEffect(() => {
  
  //   fetchAllPost()
  //     .then((data) => {
       
  //       savePosts(data);
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching data:', error);
  //     });
  // }, []); 

  const {isLoading} = useSWR("fetchAllPost", () => fetchAllPost(), {
    onSuccess: ({ data }) => {
      savePosts(data.data);
    },
    onError: (err) => {
      if (err?.response?.status === 401) {
        console.log('error fetching')
      }
    },
    shouldRetryOnError: false,
    revalidateOnFocus: false,
  });


  
  return (
    <div
      className={` min-h-screen bg-next bg-cover bg-no-repeat flex-col items-center`}
    >
     <Navbar/>

     
     <div className=' mt-20 gap-6 container mx-auto'>
     <ViewAllposts isLoading={isLoading}/>
   </div>

     

    </div>
  )
}
