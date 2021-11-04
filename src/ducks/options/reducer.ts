import { Reducer } from "redux";
import { IOptionsState, OptionsActions, OptionsActionTypes } from "./types";

const initialState: IOptionsState = {
  isLoading: false,
  options: [],
  error: "",
};

const postsReducer: Reducer<IOptionsState, OptionsActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case OptionsActionTypes.FETCH_OPTIONS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case OptionsActionTypes.FETCH_OPTIONS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        options: action.payload.options,
        error: "",
      };
    case OptionsActionTypes.FETCH_OPTIONS_FAILURE:
      return {
        ...state,
        isLoading: false,
        options: [],
        error: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
};

export default postsReducer;
