import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type postType = {
  id: string;
  status: string;
  title: string;
  description: string;
  cover: string;
  date: string;
  postBody: string;
};

export type postsState = {
  posts: [string, postType[]][];
};

let initialState: postsState;

const storeagePosts = localStorage.getItem("posts");
if (storeagePosts) {
  const posts = JSON.parse(storeagePosts);
  const mapPosts: Map<string, postType[]> = new Map();
  for (let post of posts) {
    if (mapPosts.has(post.status)) {
      let statusPosts = mapPosts.get(post.status);
      if (statusPosts) {
        statusPosts.push(post);
        mapPosts.set(post.status, statusPosts);
      }
    } else {
      mapPosts.set(post.status, [post]);
    }
  }
  const data = [...mapPosts];
  initialState = {
    posts: data,
  };
} else {
  initialState = {
    posts: [],
  };
}

export const postsSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addpost: (state, { payload }: PayloadAction<postType>) => {
      let mapPosts = new Map(state.posts);
      if (mapPosts.has(payload.status)) {
        let statusPosts = mapPosts.get(payload.status);
        if (statusPosts) {
          statusPosts.push(payload);
          mapPosts.set(payload.status, statusPosts);
        }
      } else {
        mapPosts.set(payload.status, [payload]);
      }
      state.posts = [...mapPosts];
    },
  },
});

export const { addpost } = postsSlice.actions;

export default postsSlice.reducer;
