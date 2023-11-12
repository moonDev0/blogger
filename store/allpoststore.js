// allpoststore.js

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { devtools } from "zustand/middleware";

const useAllPostStore = create(
  persist(
    devtools((set) => ({
      posts: [],
      savePosts: (posts) => set({ posts }),
    })),
    {
      name: 'allpoststore',
    }
  )
);

export default useAllPostStore;
