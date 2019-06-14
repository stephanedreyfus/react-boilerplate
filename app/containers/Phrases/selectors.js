import { createSelector } from 'reselect';
import { initialState } from './reducer';

const slectPhraseDomain = state => state.phrases || initialState;

export const makeSelectPhrase = () =>
  createSelector(
    slectPhraseDomain,
    globalState => globalState.phrase,
  );

export const makeSelectLoading = () =>
  createSelector(
    slectPhraseDomain,
    globalState => globalState.loading,
  );

export const makeSelectError = () =>
  createSelector(
    slectPhraseDomain,
    globalState => globalState.error,
  );
