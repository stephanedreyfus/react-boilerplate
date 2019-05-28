/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import history from 'utils/history';
import languageProviderReducer from 'containers/LanguageProvider/reducer';

// FIXME This doesn't seem to belong here.
// import { GET_PHRASES, ADD_PHRASE } from './containers/App/constants';

// const INITIAL_STATE = {};

// function phrases(state = INITIAL_STATE, action) {
//   switch (action.type) {
//     case GET_PHRASES:
//       return //Results of SAGA search;

//     case ADD_PHRASE:
//       return {
//         ...state,
//         // The phrase in the payload
//       };

//     default:
//       return state;
//   }
// }

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    language: languageProviderReducer,
    router: connectRouter(history),
    // phrases,
    ...injectedReducers,
  });

  return rootReducer;
}
