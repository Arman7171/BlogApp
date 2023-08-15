import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "@store/store";

const selectAllPosts = (state: RootState) => new Map(state.posts.posts);
const selectCurrentPost = (state: RootState) => state.posts.currentPost;

export const selectAllPostbyFilter = createSelector(
  [selectAllPosts],
  (allPosts) => {
    return allPosts;
  }
);

export const selectCurrentPostfromAllPosts = createSelector(
  [selectCurrentPost],
  (currentPost) => {
    return currentPost;
  }
);
