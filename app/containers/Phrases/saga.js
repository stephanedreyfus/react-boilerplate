/** In debugging stage there is a bad request I have only started to
 * explore. Currently only manage to get to error catching. */

import { takeLatest, put, all } from 'redux-saga/effects';
import axios from 'axios';
import { phraseLoadingError, addPhrase } from 'containers/Phrases/actions';

const API_URL = 'http://localhost:3001/';

function* postPhrase(data) {
  try {
    const res = yield axios.post(`${API_URL}phrases`, { phrase: data.payload });
    yield put(addPhrase(res));
  } catch (err) {
    yield put(phraseLoadingError(err));
  }
}

function* phraseWatcher() {
  yield takeLatest('ADD_PHRASE', postPhrase);
}

export default function* postPhraseSaga() {
  yield all([phraseWatcher()]);
}
