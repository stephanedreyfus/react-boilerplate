/**
 * Container for adding phrases.
 * Eventually will display most recently added phrase.
 */

import React, { memo } from 'react';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import saga from './saga';
import reducer from './reducer';

import {
  makeSelectPhrase,
  makeSelectLoading,
  makeSelectError,
} from './selectors';
import { addPhrase } from './actions';

import DisplayField from '../../components/DisplayField';
import InputForm from '../../components/InputForm';
import { Wrapper, DisplayTitle } from '../../components/Styling/PhrasesStyle';

const key = 'phrases';

export function Phrases({ phrase, sendAddPhrase }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  return (
    <Wrapper>
      <DisplayTitle>Craft a Phrase</DisplayTitle>
      <InputForm addPhrase={sendAddPhrase} />
      <DisplayTitle>Most Recently Added</DisplayTitle>
      <DisplayField phrases={phrase} />
    </Wrapper>
  );
}

Phrases.propTypes = {
  phrase: PropTypes.array,
  sendAddPhrase: PropTypes.func,
};

// FIXME Implement getting latest addition from state
const mapStateToProps = createStructuredSelector({
  phrase: makeSelectPhrase(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

const mapDispatchToProps = {
  sendAddPhrase: phrase => addPhrase(phrase),
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Phrases);
