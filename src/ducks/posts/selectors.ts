import { createSelector } from "reselect";

import { RootState } from "../../store";

const getLoading = (state: RootState) => state.posts.isLoading;

const getPosts = (state: RootState) => state.posts.posts;

const getPostsError = (state: RootState) => state.posts.error;

export const selectPosts = createSelector(getPosts, (posts) => posts);

export const selectLoadingPosts = createSelector(
  getLoading,
  (isLoading) => isLoading
);

export const selectErrorPosts = createSelector(getPostsError, (error) => error);
