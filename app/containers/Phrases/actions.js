/*
 * Phrase actions
 */

import { ADD_PHRASE, ADD_PHRASE_ERROR } from './constants';

export function addPhrase(phrase) {
  return {
    type: ADD_PHRASE,
    payload: phrase,
  };
}

export function phraseLoadingError(error) {
  return {
    type: ADD_PHRASE_ERROR,
    error,
  };
}
