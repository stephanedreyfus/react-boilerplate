/*
 * Phrase actions
 */

import { ADD_PHRASE, ADD_PHRASE_SUCCESS, ADD_PHRASE_ERROR } from './constants';

export function addPhrase(phrase) {
  return {
    type: ADD_PHRASE,
    payload: phrase,
  };
}

export function addPhraseSuccess(phrase) {
  return {
    type: ADD_PHRASE_SUCCESS,
    phrase,
  };
}

export function addPhraseError() {
  return {
    type: ADD_PHRASE_ERROR,
  };
}
