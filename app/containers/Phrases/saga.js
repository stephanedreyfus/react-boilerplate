/** Barely started before running out of time. Need more clarity on
 * how to merge together all the various parts of Boilerplate in order
 * to properly make dispatches to the back end and then store the results
 * in the store, as well as dispatch to the store to get stored data. */

import axios from 'axios';
import { takeLatest, call, put, select } from 'redux-saga/effects';

function* phraseWatcher() {
  yield takeLatest('ADD_PHRASE', addPhrase);
}

function* addPhrase() {
  try {
    
  }
}

export default function* addPhraseSaga() {
  yield all([phraseWatcher()]);
}
