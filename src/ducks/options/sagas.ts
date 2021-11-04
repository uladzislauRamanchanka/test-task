import { all, call, put, takeLatest } from "redux-saga/effects";
import { DATA } from "../../utils/axios";
import { IUser } from "../../interfaces";

import { fetchOptionsSuccess, fetchOptionsFailure} from "./actions";
import { OptionsActionTypes } from "./types";

/*
  Worker Saga: Fired on FETCH_OPTIONS_REQUEST action
*/

function* fetchOptionsSaga() {
  try {
    const response: IUser[] = yield call(DATA.getUsers);
    const ids = response.map((user) => user.id.toString());
    yield put(
      fetchOptionsSuccess({
        options: ids,
      })
    );
  } catch (e) {
    yield put(
      fetchOptionsFailure({
        error: e.message,
      })
    );
  }
}

/*
  Starts worker saga on latest dispatched `FETCH_OPTIONS_REQUEST` action.
*/

function* watchOptionsSaga() {
  yield all([takeLatest(OptionsActionTypes.FETCH_OPTIONS_REQUEST, fetchOptionsSaga)]);
}

export default watchOptionsSaga;
