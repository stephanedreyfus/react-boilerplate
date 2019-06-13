import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the collection state domain
 */

const selectCollection = state => state.collection || initialState;

const makeSelectPhrases = () =>
  createSelector(
    selectCollection,
    globalState => globalState.phrases,
  );

const makeSelectLoading = () =>
  createSelector(
    selectCollection,
    globalState => globalState.loading,
  );

const makeSelectError = () =>
  createSelector(
    selectCollection,
    globalState => globalState.error,
  );

export { makeSelectPhrases, makeSelectLoading, makeSelectError };
