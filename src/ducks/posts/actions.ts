import {
  PostsActionTypes,
  FetchPostsSuccess,
  FetchPostsFailure,
  FetchPostsRequest,
  FetchPostsFailurePayload,
  FetchPostsSuccessPayload,
  FetchPostsRequestPayload,
} from "./types";

export const fetchPostsRequest = (
  payload: FetchPostsRequestPayload
): FetchPostsRequest => ({
  type: PostsActionTypes.FETCH_POSTS_REQUEST,
  payload,
});

export const fetchPostsSuccess = (
  payload: FetchPostsSuccessPayload
): FetchPostsSuccess => ({
  type: PostsActionTypes.FETCH_POSTS_SUCCESS,
  payload,
});

export const fetchPostsFailure = (
  payload: FetchPostsFailurePayload
): FetchPostsFailure => ({
  type: PostsActionTypes.FETCH_POSTS_FAILURE,
  payload,
});
