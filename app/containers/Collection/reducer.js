import produce from 'immer';
import {
  GET_PHRASES,
  GET_PHRASES_SUCCESS,
  GET_PHRASES_ERROR,
} from './constants';

export const initialState = {
  phrases: [],
  loading: true,
  error: false,
};

/* eslint-disable default-case, no-param-reassign */
const collectionReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_PHRASES:
        break;
      case GET_PHRASES_ERROR:
        draft.loading = false;
        draft.error = true;
        break;
      case GET_PHRASES_SUCCESS:
        draft.loading = false;
        draft.phrases = action.phrases;
        break;
    }
  });

export default collectionReducer;
