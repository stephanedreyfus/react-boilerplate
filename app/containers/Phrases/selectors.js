import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the phrases state domain
 */

const selectStringDomain = state => state.string || initialState;
const myPhraseSelector = (state) => state.newPhrase || initialState
/**
 * Default selector used by Phrases
 */

const makeSelectString = () =>
  createSelector(
    selectStringDomain,
    substate => substate,
  );

export default makeSelectString;
export { selectStringDomain };
