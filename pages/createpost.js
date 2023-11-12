import Addpost from '@/components/blogs/createpost'
import Navbar from '@/components/common/navbar'
import React from 'react'

const Createpost = () => {
  return (
    <div className='bg-next bg-no-repeat bg-cover h-screen w-full'>
        <div>
            <Navbar/>
        </div>

        <div className='container pt-40 mx-auto'>
            <form action="">
                <div className=' bg-white w-[500px]  rounded-sm'>
                    <input type="text" className='px-5 py-2 w-full' placeholder='Post Title' name="" id="" />
                </div>

                <div className=' bg-white mt-5 w-[500px]  rounded-sm'>
                    <textarea name="" className='w-full h-full p-5' placeholder='Enter text' id="" cols="30" rows="10"></textarea>
                </div>
                <div className=' bg-white mt-5 w-[500px]  rounded-sm'>
                    <button className='px-2 py-1 text-center w-full'>Submit</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Createpost