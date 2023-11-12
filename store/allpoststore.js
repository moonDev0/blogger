// allpoststore.js

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { devtools } from "zustand/middleware";

const useAllPostStore = create(
  persist(
    devtools((set) => ({
      posts: [],
      savePosts: (posts) => set({ posts }),
      removePost: (postId) => set((state) => ({ posts: state.posts.filter(post => post.id !== postId) })),
    })),
    {
      name: 'allpoststore',
    }
  )
);

export default useAllPostStore;
