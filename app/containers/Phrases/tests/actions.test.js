import { addPhrase, addPhraseSuccess, addPhraseError } from '../actions';
import { ADD_PHRASE, ADD_PHRASE_SUCCESS, ADD_PHRASE_ERROR } from '../constants';

describe('Phrases Container actions', () => {
  describe('Phrases Actions', () => {
    it('has a type of ADD_PHRASE', () => {
      const expected = {
        type: ADD_PHRASE,
        payload: 'test',
      };
      expect(addPhrase('test')).toEqual(expected);
    });
    it('has a type of ADD_PHRASE_SUCCESS', () => {
      const expected = {
        type: ADD_PHRASE_SUCCESS,
        payload: 'test',
      };
      expect(addPhraseSuccess('test')).toEqual(expected);
    });
    it('has a type of ADD_PHRASE_ERROR', () => {
      const expected = {
        type: ADD_PHRASE_ERROR,
      };
      expect(addPhraseError()).toEqual(expected);
    });
  });
});
