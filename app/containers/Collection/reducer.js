/*
 * Collection reducer
 */
import produce from 'immer';
import {
  GET_PHRASES,
  GET_PHRASES_SUCCESS,
  GET_PHRASES_ERROR,
} from './constants';

export const initialState = {
  phrases: [],
  loading: false,
  error: false,
};

/* eslint-disable default-case, no-param-reassign */
const collectionReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      // FIXME Do we need this case?
      case GET_PHRASES:
        break;
      case GET_PHRASES_ERROR:
        draft.loading = true;
        draft.error = true;
        break;
      case GET_PHRASES_SUCCESS:
        draft.loading = true;
        draft.phrases = action.phrases.items;
        break;
    }
  });

export default collectionReducer;
