import { createSelector } from "reselect";

import { RootState } from "../../store";

const getLoading = (state: RootState) => state.options.isLoading;

const getOptions = (state: RootState) => state.options.options;

const getOptionsError = (state: RootState) => state.options.error;

export const selectOptions = createSelector(getOptions, (options) => options);

export const selectLoadingOptions = createSelector(
  getLoading,
  (isLoading) => isLoading
);

export const selectErrorOptions = createSelector(getOptionsError, (error) => error);
