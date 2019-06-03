/*
 * Phrase actions
 */

import { ADD_PHRASE } from './constants';

export function addPhrase(phrase) {
  return {
    type: ADD_PHRASE,
    payload: phrase,
  };
}
