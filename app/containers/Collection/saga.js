/** Did not complete a functioning add phrase sage in time,
 * therefore the retrieval saga will have to wait. */

import { takeLatest, call, put } from 'redux-saga/effects';
import request from 'utils/requests';

import { getPhrasesError, getPhrasesSuccess } from './actions';
import { GET_PHRASES } from './constants';

// FIXME Because API_URL is used in two files already, create
// file in utils to hold API address, then import.
const API_URL = 'http://localhost:3001/';

export function* getPhrases() {
  try {
    const res = yield call(request, API_URL);
    // debugger;
    yield put(getPhrasesSuccess(res));
  } catch (err) {
    yield put(getPhrasesError(err));
  }
}

export default function* getPhraseWatcher() {
  yield takeLatest(GET_PHRASES, getPhrases);
}
