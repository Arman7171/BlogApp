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
  currentPost: postType;
  loading: boolean;
};

const initialState: postsState = {
  posts: [],
  currentPost: {
    id: "",
    status: "",
    title: "",
    description: "",
    cover: "",
    date: "",
    postBody: "",
  },
  loading: false,
};

export const postsSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addPost: (state, { payload }: PayloadAction<postType>) => {
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
    getPosts: (state) => {
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
        state.posts = data;
      } else {
        state.posts = [];
      }
    },
    getSelectedPost: (state, { payload: id }) => {
      let mapPosts = new Map(state.posts);
      if (mapPosts.size) {
        for (let key of mapPosts.keys()) {
          let posts = mapPosts.get(key);
          if (posts?.length) {
            for (let post of posts) {
              if (post.id === id) {
                state.currentPost = post;
                break;
              }
            }
          }
          break;
        }
      }
    },
  },
});

export const { addPost, getPosts, getSelectedPost } = postsSlice.actions;

export default postsSlice.reducer;
