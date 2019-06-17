import {
  selectCollectionDomain,
  makeSelectPhrases,
  makeSelectLoading,
  makeSelectError,
} from '../selectors';

describe('selectCollectionDomain', () => {
  it('should select the global state', () => {
    const globalState = {
      error: false,
      loading: true,
      phrases: [],
    };
    const mockedState = {
      global: globalState,
    };
    expect(selectCollectionDomain(mockedState)).toEqual(globalState);
  });
});

describe('makeSelectPhrases', () => {
  const currentUserSelector = makeSelectPhrases();
  it('should select the phrases', () => {
    const phrases = [];
    const mockedState = {
      global: {
        phrases,
      },
    };
    expect(currentUserSelector(mockedState)).toEqual(phrases);
  });
});

describe('makeSelectLoading', () => {
  const loadingSelector = makeSelectLoading();
  it('should select the loading', () => {
    const loading = true;
    const mockedState = {
      global: {
        loading,
      },
    };
    expect(loadingSelector(mockedState)).toEqual(loading);
  });
});

describe('makeSelectError', () => {
  const errorSelector = makeSelectError();
  it('should select the error', () => {
    const error = false;
    const mockedState = {
      global: {
        error,
      },
    };
    expect(errorSelector(mockedState)).toEqual(error);
  });
});
