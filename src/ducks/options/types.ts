export enum OptionsActionTypes {
  FETCH_OPTIONS_REQUEST = "@@options/FETCH_OPTIONS_REQUEST",
  FETCH_OPTIONS_SUCCESS = "@@options/FETCH_OPTIONS_SUCCESS",
  FETCH_OPTIONS_FAILURE = "@@options/FETCH_OPTIONS_FAILURE",
}

export interface IOptionsState {
  isLoading: boolean;
  options: string[];
  error: string;
}

export interface FetchOptionsSuccessPayload {
  options: string[];
}

export interface FetchOptionsFailurePayload {
  error: string;
}

export interface FetchOptionsRequest {
  type: typeof OptionsActionTypes.FETCH_OPTIONS_REQUEST;
}

export type FetchOptionsSuccess = {
  type: typeof OptionsActionTypes.FETCH_OPTIONS_SUCCESS;
  payload: FetchOptionsSuccessPayload;
};

export type FetchOptionsFailure = {
  type: typeof OptionsActionTypes.FETCH_OPTIONS_FAILURE;
  payload: FetchOptionsFailurePayload;
};

export type OptionsActions =
  | FetchOptionsRequest
  | FetchOptionsSuccess
  | FetchOptionsFailure;
