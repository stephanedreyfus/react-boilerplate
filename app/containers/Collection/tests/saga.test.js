import { takeLatest, put } from 'redux-saga/effects';

import { getPhrasesError, getPhrasesSuccess } from '../actions';
import getPhraseWatcher, { getPhrases } from '../saga';
import { GET_PHRASES } from '../constants';

describe('getPhrases Saga', () => {
  let getPhrasesGenerator;

  beforeEach(() => {
    getPhrasesGenerator = getPhrases();

    const selectDescriptor = getPhrasesGenerator.next().value;
    expect(selectDescriptor).toMatchSnapshot();
  });

  it('should dispatch the getPhrasesSuccessfully action if it requests the data successfully', () => {
    const response = [
      {
        phrase: 'test phrase one',
      },
      {
        phrase: 'test phrase two',
      },
    ];
    const putDescriptor = getPhrasesGenerator.next(response).value;
    expect(putDescriptor).toEqual(put(getPhrasesSuccess(response)));
  });

  it('should call the repoLoadingError action if the response errors', () => {
    const response = new Error('Some error');
    const putDescriptor = getPhrasesGenerator.throw(response).value;
    expect(putDescriptor).toEqual(put(getPhrasesError(response)));
  });
});

describe('phraseDataSaga watcher', () => {
  const phraseDataSaga = getPhraseWatcher();

  it('should start task to watch for LOAD_REPOS action', () => {
    const takeLatestDescriptor = phraseDataSaga.next().value;
    expect(takeLatestDescriptor).toEqual(takeLatest(GET_PHRASES, getPhrases));
  });
});
