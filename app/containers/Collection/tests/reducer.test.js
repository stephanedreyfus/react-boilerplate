import produce from 'immer';
import collectionReducer from '../reducer';
import { getPhrases, getPhrasesSuccess, getPhrasesError } from '../actions';

/* eslint-disable default-case, no-param-reassign */
describe('collectionReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      phrases: [],
      loading: true,
      error: false,
    };
  });

  it('returns the initial state', () => {
    const expectedResult = state;
    expect(collectionReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the getPhrases action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.loading = true;
      draft.error = false;
      draft.phrases = [];
    });
    expect(collectionReducer(state, getPhrases())).toEqual(expectedResult);
  });

  it('should handle the getPhrasesSuccess action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.loading = false;
      draft.error = false;
      draft.phrases = ['test'];
    });
    expect(collectionReducer(state, getPhrasesSuccess(['test']))).toEqual(
      expectedResult,
    );
  });

  it('should handle the getPhrasesError action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.loading = false;
      draft.error = true;
    });
    expect(collectionReducer(state, getPhrasesError())).toEqual(expectedResult);
  });
});
