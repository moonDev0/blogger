import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='shadow-2xl fixed top-0 bg-black h-[80px] w-full'>
    <div className='container mx-auto items-center pt-10 flex justify-between'> 
    <Link href="/">
      <h1 className='text-white text-[30px] font-bold'>Blogs</h1> 
    </Link>
    <Link href="/createpost">
      <button className='bg-blue-500 text-white px-2 py-1 rounded-md text-[13px]'>Add Post</button>
    </Link>
    </div>
    
    </div>
  )
}

export default Navbar