import { fork, all } from 'redux-saga/effects';
import postPhraseSaga from './containers/Phrases/saga';
import getPhrasesSaga from './containers/Collection/saga';

export default function* rootSaga() {
  yield all([fork(getPhrasesSaga), fork(postPhraseSaga)]);
}
