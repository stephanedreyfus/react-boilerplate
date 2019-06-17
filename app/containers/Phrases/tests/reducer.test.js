import produce from 'immer';
import phraseReducer from '../reducer';
import { addPhrase, addPhraseSuccess, addPhraseError } from '../actions';

/* eslint-disable default-case, no-param-reassign */
describe('phraseReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      phrase: [],
      loading: true,
      error: false,
    };
  });

  it('returns the initial state', () => {
    const expectedResult = state;
    expect(phraseReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the getPhrases action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.loading = true;
      draft.error = false;
      draft.phrase = [];
    });
    expect(phraseReducer(state, addPhrase())).toEqual(expectedResult);
  });

  it('should handle the getPhrasesSuccess action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.loading = false;
      draft.error = false;
      draft.phrase = ['test'];
    });
    expect(phraseReducer(state, addPhraseSuccess(['test']))).toEqual(
      expectedResult,
    );
  });

  it('should handle the getPhrasesError action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.loading = false;
      draft.error = true;
      draft.phrase = [];
    });
    expect(phraseReducer(state, addPhraseError())).toEqual(expectedResult);
  });
});
