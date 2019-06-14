import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectCollectionDomain = state => state.collection || initialState;

export const makeSelectPhrases = () =>
  createSelector(
    selectCollectionDomain,
    globalState => globalState.phrases,
  );

export const makeSelectLoading = () =>
  createSelector(
    selectCollectionDomain,
    globalState => globalState.loading,
  );

export const makeSelectError = () =>
  createSelector(
    selectCollectionDomain,
    globalState => globalState.error,
  );
