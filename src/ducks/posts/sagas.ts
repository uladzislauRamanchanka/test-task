import { all, call, put, takeLatest } from "redux-saga/effects";
import { DATA } from "../../utils/axios";
import { IPost } from "../../interfaces";

import { fetchPostsFailure, fetchPostsSuccess } from "./actions";
import { PostsActionTypes, FetchPostsRequest } from "./types";

/*
  Worker Saga: Fired on FETCH_POSTS_REQUEST action
*/

function* fetchPostsSaga(searchParams: FetchPostsRequest) {
  const {
    payload: { userId },
  } = searchParams;
  const url =
    userId.length > 0
      ? `posts?${userId.map((id) => `userId=${id}`).join("&")}`
      : "posts";
  try {
    const response: IPost[] = yield call(DATA.getPosts, url);
    yield put(
      fetchPostsSuccess({
        posts: response,
      })
    );
  } catch (e) {
    yield put(
      fetchPostsFailure({
        error: e.message,
      })
    );
  }
}

/*
  Starts worker saga on latest dispatched `FETCH_POSTS_REQUEST` action.
*/

function* watchPostsSaga() {
  yield all([takeLatest(PostsActionTypes.FETCH_POSTS_REQUEST, fetchPostsSaga)]);
}

export default watchPostsSaga;
