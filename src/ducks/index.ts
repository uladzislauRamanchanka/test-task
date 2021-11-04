import { all, fork } from "redux-saga/effects";
import { combineReducers } from "redux";

//all reducers
import postsReducer from "./posts/reducer";
import optionsReducer from "./options/reducer";

//all sagas
import postsSaga from "./posts/sagas";
import oprionsSaga from "./options/sagas";

export function* rootSaga() {
  yield all([fork(postsSaga), fork(oprionsSaga)]);
}

export const rootReducer = combineReducers({
  posts: postsReducer,
  options: optionsReducer,
});
