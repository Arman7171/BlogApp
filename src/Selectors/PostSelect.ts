import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "@store/store";

export const selectAllPosts = (state: RootState) => new Map(state.posts.posts);

export const selectAllPostbyFilter = createSelector(
  [selectAllPosts],
  (allPosts) => {
    return allPosts;
  }
);
