import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectCollectionDomain = state => state.collection || initialState;

const makeSelectPhrases = () =>
  createSelector(
    selectCollectionDomain,
    globalState => globalState.phrases,
  );

const makeSelectLoading = () =>
  createSelector(
    selectCollectionDomain,
    globalState => globalState.loading,
  );

const makeSelectError = () =>
  createSelector(
    selectCollectionDomain,
    globalState => globalState.error,
  );

export {
  selectCollectionDomain,
  makeSelectPhrases,
  makeSelectLoading,
  makeSelectError,
};
