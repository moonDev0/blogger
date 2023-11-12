import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='shadow-2xl fixed top-0 bg-black h-[80px] w-full'>
    <div className='container mx-auto items-center pt-10 flex justify-between'> 
    <h1 className='text-white'>Blogs</h1> 
    <button className='bg-blue-500 text-white px-2 py-1 rounded-md text-[13px]'>Add Post</button>
    </div>
    
    </div>
  )
}

export default Navbar