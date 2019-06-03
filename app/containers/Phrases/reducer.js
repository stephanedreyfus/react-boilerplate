/*
 * Phrase reducer
 */
import produce from 'immer';
import { ADD_PHRASE } from './constants';

export const initialState = {};

// FIXME Look at immer docs for state change documentation.
/* eslint-disable default-case, no-param-reassign */
const phraseReducer = (state = initialState, action = {}) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case ADD_PHRASE:
        break;
      default:
        return state;
    }
  });

export default phraseReducer;
