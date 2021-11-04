import { IPost } from "../../interfaces";

export enum PostsActionTypes {
  FETCH_POSTS_REQUEST = "@@posts/FETCH_POSTS_REQUEST",
  FETCH_POSTS_SUCCESS = "@@posts/FETCH_POSTS_SUCCESS",
  FETCH_POSTS_FAILURE = "@@posts/FETCH_POSTS_FAILURE",
}

export interface IPostsState {
  isLoading: boolean;
  posts: IPost[];
  error: string;
}

export interface FetchPostsSuccessPayload {
  posts: IPost[];
}

export interface FetchPostsFailurePayload {
  error: string;
}

export interface FetchPostsRequestPayload {
  userId: string[];
}

export interface FetchPostsRequest {
  type: typeof PostsActionTypes.FETCH_POSTS_REQUEST;
  payload: FetchPostsRequestPayload
}

export type FetchPostsSuccess = {
  type: typeof PostsActionTypes.FETCH_POSTS_SUCCESS;
  payload: FetchPostsSuccessPayload;
};

export type FetchPostsFailure = {
  type: typeof PostsActionTypes.FETCH_POSTS_FAILURE;
  payload: FetchPostsFailurePayload;
};

export type PostsActions =
  | FetchPostsRequest
  | FetchPostsSuccess
  | FetchPostsFailure;
