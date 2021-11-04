import {
  OptionsActionTypes,
  FetchOptionsFailure,
  FetchOptionsFailurePayload,
  FetchOptionsRequest,
  FetchOptionsSuccess,
  FetchOptionsSuccessPayload,
} from "./types";

export const fetchOptionsRequest = (): FetchOptionsRequest => ({
  type: OptionsActionTypes.FETCH_OPTIONS_REQUEST,
});

export const fetchOptionsSuccess = (
  payload: FetchOptionsSuccessPayload
): FetchOptionsSuccess => ({
  type: OptionsActionTypes.FETCH_OPTIONS_SUCCESS,
  payload,
});

export const fetchOptionsFailure = (
  payload: FetchOptionsFailurePayload
): FetchOptionsFailure => ({
  type: OptionsActionTypes.FETCH_OPTIONS_FAILURE,
  payload,
});
