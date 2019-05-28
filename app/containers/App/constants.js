/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 *
 * Constants below for determing action types of adding a phrase and getting phrases.
 */

export const ADD_PHRASE = 'ADD_PHRASE';
export const GET_PHRASES = 'GET_PHRASES';
