/** Did not complete a functioning add phrase sage in time,
 * therefore the retrieval saga will have to wait. */

import { takeLatest, call, put } from 'redux-saga/effects';
import request from 'utils/requests';

import { getPhrasesError, getPhrasesSuccess } from './actions';
import { GET_PHRASES } from './constants';
import { API_URL } from '../../utils/constants';

export function* getPhrases() {
  try {
    const res = yield call(request, `${API_URL}collection`);
    yield put(getPhrasesSuccess(res));
  } catch (err) {
    yield put(getPhrasesError(err));
  }
}

export default function* getPhraseWatcher() {
  yield takeLatest(GET_PHRASES, getPhrases);
}
