/*
 * Phrase reducer
 */
import produce from 'immer';
import { ADD_PHRASE, ADD_PHRASE_SUCCESS, ADD_PHRASE_ERROR } from './constants';

export const initialState = {
  phrase: [],
  loading: true,
  error: false,
};

/* eslint-disable default-case, no-param-reassign */
const phraseReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case ADD_PHRASE:
        break;
      case ADD_PHRASE_ERROR:
        draft.loading = false;
        draft.error = true;
        break;
      case ADD_PHRASE_SUCCESS:
        draft.loading = false;
        draft.phrase = action.payload;
        break;
    }
  });

export default phraseReducer;
