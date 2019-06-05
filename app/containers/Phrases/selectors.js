import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the phrases state domain
 */

const myPhraseSelector = state => state.newPhrase || initialState;
/**
 * Default selector used by Phrases
 */

const makeSelectPhrase = () =>
  createSelector(
    myPhraseSelector,
    substate => substate,
  );

export default makeSelectPhrase;
