import apiClient from '../lib/axios';
import useAllPostStore from '@/store/allpoststore'; // Update the path accordingly

export const fetchAllPost = async () => {
  try {
    const response = await apiClient.get("posts");
    const data = response.data;
    useAllPostStore.getState().savePosts(data);
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};