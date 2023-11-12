import React, { useState } from 'react';
import Navbar from '@/components/common/navbar';
import { AddPost } from '@/utils/addpost';

const Createpost = () => {
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const postData = {
        title: postTitle,
        body: postBody,
        userId: 1,
      };

      const responseData = await AddPost(postData);

    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='bg-next bg-no-repeat bg-cover h-screen w-full'>
      <div>
        <Navbar />
      </div>

      <div className='container pt-40 mx-auto'>
        <form onSubmit={handleSubmit}>
          <div className='bg-white w-[500px] rounded-sm'>
            <input
              type="text"
              className='px-5 py-2 w-full'
              placeholder='Post Title'
              value={postTitle}
              onChange={(e) => setPostTitle(e.target.value)}
            />
          </div>

          <div className='bg-white mt-5 w-[500px] rounded-sm'>
            <textarea
              name=""
              className='w-full h-full p-5'
              placeholder='Enter text'
              value={postBody}
              onChange={(e) => setPostBody(e.target.value)}
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <div className='bg-white mt-5 w-[500px] rounded-sm'>
            <button type="submit" className='px-2 py-1 text-center w-full'>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Createpost;
