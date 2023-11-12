import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='shadow-2xl h-[80px] w-full'>
    <div className='container mx-auto items-center pt-10 flex justify-between'> <h1 className='text-white'>Blogs</h1> 
    <Link href="/admin">
     LOGIN
    </Link> 
    </div>
    
    </div>
  )
}

export default Navbar