import { takeLatest, put } from 'redux-saga/effects';
import axios from 'axios';

import { addPhraseError, addPhraseSuccess } from 'containers/Phrases/actions';
import { ADD_PHRASE } from './constants';
import { API_URL } from '../../utils/constants';

function* postPhrase(data) {
  try {
    const res = yield axios.post(`${API_URL}phrases`, {
      phrase: data.payload,
    });
    yield put(addPhraseSuccess(res.data));
  } catch (err) {
    yield put(addPhraseError(err));
  }
}

export default function* postPhraseWatcher() {
  yield takeLatest(ADD_PHRASE, postPhrase);
}
