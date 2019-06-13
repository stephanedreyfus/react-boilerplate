/*
 * Phrase reducer
 */
import produce from 'immer';
import { ADD_PHRASE, ADD_PHRASE_ERROR } from './constants';

export const initialState = {};

/* eslint-disable default-case, no-param-reassign */
const phraseReducer = (state = initialState, action = {}) =>
  produce(state, draft => {
    switch (action.type) {
      case ADD_PHRASE:
        draft.newPhrase = action.payload;
        break;
      case ADD_PHRASE_ERROR:
        draft.newError = action.payload;
        break;
    }
  });

export default phraseReducer;
