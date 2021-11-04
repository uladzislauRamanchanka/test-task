import { Reducer } from "redux";
import { IPostsState, PostsActions, PostsActionTypes } from "./types";

const initialState: IPostsState = {
  isLoading: false,
  posts: [],
  error: "",
};

const postsReducer: Reducer<IPostsState, PostsActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case PostsActionTypes.FETCH_POSTS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case PostsActionTypes.FETCH_POSTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        posts: action.payload.posts,
        error: "",
      };
    case PostsActionTypes.FETCH_POSTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        posts: [],
        error: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
};

export default postsReducer;
