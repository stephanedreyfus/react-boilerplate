import { takeLatest, put, all } from 'redux-saga/effects';
import axios from 'axios';
import { addPhraseError, addPhrase } from 'containers/Phrases/actions';
import { API_URL } from '../../utils/constants';

// Use axios or is there a way to use Boilerplate request api?

function* postPhrase(data) {
  try {
    const res = yield axios.post(`${API_URL}phrases`, { phrase: data.payload });
    yield put(addPhrase(res));
  } catch (err) {
    yield put(addPhraseError(err));
  }
}

function* phraseWatcher() {
  yield takeLatest('ADD_PHRASE', postPhrase);
}

export default function* postPhraseSaga() {
  yield all([phraseWatcher()]);
}
