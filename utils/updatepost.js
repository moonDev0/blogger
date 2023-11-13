// utils/updatepost.js
import apiClient from '../lib/axios'; // Import your apiClient here

export const updatePost = async (id, title, body, userId) => {
  try {
    const response = await apiClient({
      url: `https://jsonplaceholder.typicode.com/posts/${id}`,
      method: "PUT",
      data: {
        id: id,
        title: title,
        body: body,
        userId: userId,
      },
    });

    return response.data;
  } catch (error) {
    throw error; // Rethrow the error to handle it in the calling component if needed
  }
};

