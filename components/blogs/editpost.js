import React, { useState } from 'react';
import Navbar from '@/components/common/navbar';
import Spinner from '@/lib/spinner';
import { updatePost } from '@/utils/updatepost';

const EditPost = ({ id, title, body }) => {
  const [postTitle, setPostTitle] = useState(title || '');
  const [postBody, setPostBody] = useState(body || ''); 
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const responseData = await updatePost(id, postTitle, postBody, 1);

      setLoading(false);
      setSuccessMessage('Post updated successfully!');

      setErrorMessage(''); 
    } catch (error) {
      setLoading(false);
      setSuccessMessage('');
      setErrorMessage('Error updating post. Please try again.');
      console.error('Error:', error);
    }
  };

  return (
    <div className='bg-next bg-no-repeat bg-cover h-screen w-full'>
      <div>

      </div>
       <h1 className='text-white w-full text-center text-[30px] font-bold'>Edit post</h1>
      <div className='container pt-40 mx-auto'>
        <form onSubmit={handleSubmit}>
          <div className='bg-white w-[500px] rounded-sm'>
            <input
              type="text"
              className='px-5 py-2 w-full'
              placeholder={title}
              value={postTitle}
              onChange={(e) => setPostTitle(e.target.value)}
            />
          </div>

          <div className='bg-white mt-5 w-[500px] rounded-sm'>
            <textarea
              name=""
              className='w-full h-full p-5'
              placeholder={body}
              value={postBody}
              onChange={(e) => setPostBody(e.target.value)}
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <div className='bg-white mt-5 w-[500px] rounded-sm'>
            <button type="submit" className='px-2 py-1 text-center w-full'>
              {loading ? <Spinner colour="blue" /> : 'Submit'}
            </button>
          </div>

          {successMessage && <p className="text-green-500">{successMessage}</p>}
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        </form>
      </div>
    </div>
  );
};

export default EditPost;
