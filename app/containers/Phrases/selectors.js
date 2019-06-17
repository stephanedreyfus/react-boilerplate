import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectPhraseDomain = state => state.phrases || initialState;

const makeSelectPhrase = () =>
  createSelector(
    selectPhraseDomain,
    globalState => globalState.phrase,
  );

const makeSelectLoading = () =>
  createSelector(
    selectPhraseDomain,
    globalState => globalState.loading,
  );

const makeSelectError = () =>
  createSelector(
    selectPhraseDomain,
    globalState => globalState.error,
  );

export {
  selectPhraseDomain,
  makeSelectPhrase,
  makeSelectLoading,
  makeSelectError,
};
