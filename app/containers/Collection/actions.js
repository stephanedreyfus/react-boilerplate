/*
 * Collection actions
 */

import {
  GET_PHRASES,
  GET_PHRASES_SUCCESS,
  GET_PHRASES_ERROR,
} from './constants';

export function getPhrases() {
  return {
    type: GET_PHRASES,
  };
}

export function getPhrasesError() {
  return {
    type: GET_PHRASES_ERROR,
  };
}

export function getPhrasesSuccess(phrases) {
  return {
    type: GET_PHRASES_SUCCESS,
    phrases,
  };
}
