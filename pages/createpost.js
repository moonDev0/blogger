import React, { useState } from 'react';
import Navbar from '@/components/common/navbar';
import { AddPost } from '@/utils/addpost';

const Createpost = () => {
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const postData = {
        title: postTitle,
        body: postBody,
        userId: 1,
      };

      const responseData = await AddPost(postData);

      setLoading(false);
      setSuccessMessage('Post added successfully!');
      setErrorMessage(''); // Reset error message if there was any

      // Reset form inputs
      setPostTitle('');
      setPostBody('');

      // Optionally, you can redirect the user or perform other actions after a successful post

    } catch (error) {
      setLoading(false);
      setSuccessMessage('');
      setErrorMessage('Error adding post. Please try again.');
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
            <button type="submit" className='px-2 py-1 text-center w-full'>
              {loading ? 'Adding...' : 'Submit'}
            </button>
          </div>

          {successMessage && <p className="text-green-500">{successMessage}</p>}
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        </form>
      </div>
    </div>
  );
};

export default Createpost;
