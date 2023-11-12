import apiClient from '../lib/axios';

// export const deletePost = async (postId) => {
//   try {
//     const response = await apiClient.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`);
//     console.log(response.data);
//     return response.data;
//   } catch (error) {
//     console.error('Error:', error);
//     throw error; // Rethrow the error to the calling function if needed
//   }
// };


// import apiClient from "../../lib/axios";

export const deletePost = async (id) => {
    return await apiClient({
        url: `https://jsonplaceholder.typicode.com/posts/${id}`,
        method: "delete",
        data: { id },
      });
    };
