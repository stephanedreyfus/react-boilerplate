/** FIXME Barely started before running out of time. Need more clarity on
 * how to merge together all the various parts of Boilerplate in order
 * to properly make dispatches to the back end and then store the results
 * in the store, as well as dispatch to the store to get stored data. */

import { takeLatest, call, put, all } from 'redux-saga/effects';
import { phraseLoadingError, addPhrase } from 'containers/Phrases/actions';
import request from 'utils/requests';

const API_URL = 'http://localhost:3000/phrases';

function* postPhrase() {
  try {
    console.log('Made it to saga');
    const res = yield call(request, API_URL);
    yield put(addPhrase(res));
  } catch (err) {
    console.log('Made it to saga error');
    yield put(phraseLoadingError(err));
  }
}

function* phraseWatcher() {
  yield takeLatest('ADD_PHRASE', postPhrase);
}

export default function* postPhraseSaga() {
  yield all([phraseWatcher()]);
}
