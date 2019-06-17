import { getPhrases, getPhrasesSuccess, getPhrasesError } from '../actions';
import {
  GET_PHRASES,
  GET_PHRASES_SUCCESS,
  GET_PHRASES_ERROR,
} from '../constants';

describe('Collection actions', () => {
  describe('Collection Actions', () => {
    it('has a type of GET_PHRASES', () => {
      const expected = {
        type: GET_PHRASES,
      };
      expect(getPhrases()).toEqual(expected);
    });
    it('has a type of GET_PHRASES_SUCCESS', () => {
      const expected = {
        type: GET_PHRASES_SUCCESS,
      };
      expect(getPhrasesSuccess()).toEqual(expected);
    });
    it('has a type of GET_PHRASES_ERROR', () => {
      const expected = {
        type: GET_PHRASES_ERROR,
      };
      expect(getPhrasesError()).toEqual(expected);
    });
  });
});
