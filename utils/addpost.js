import apiClient from '../lib/axios';

export const AddPost = async (title, body, userId) => {
  try {
    const response = await apiClient.post('https://jsonplaceholder.typicode.com/posts', {
      title: title,
      body: body,
      userId: userId,
    });

    console.log(response.data);
    return response.data; 
  } catch (error) {
    console.error('Error:', error);
    throw error; // Rethrow the error to the calling function if needed
  }
};
