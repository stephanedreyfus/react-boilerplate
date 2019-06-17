/**
 * Container for adding phrases.
 * Also displays most recently added phrase.
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
import {
  Wrapper,
  DisplayTitle,
  NoPhrase,
} from '../../components/Styling/PhrasesStyle';

const key = 'phrases';
let loaded;
let notLoaded;

export function Phrases({ phrase, loading, sendAddPhrase }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  if (loading) {
    // FUTUREFIX Replace Loading phrase with loading graphic component
    // If no phrases are loaded, render the following:
    notLoaded = <NoPhrase>No Phrase Yet</NoPhrase>;
  } else {
    // If phrases have been loaded, render the following:
    loaded = (
      <>
        <DisplayField phrases={phrase} />
      </>
    );
  }

  return (
    <Wrapper>
      <DisplayTitle>Craft a Phrase</DisplayTitle>
      <InputForm addPhrase={sendAddPhrase} />
      <DisplayTitle>Most Recently Added</DisplayTitle>
      {loading === true ? notLoaded : loaded}
    </Wrapper>
  );
}

Phrases.propTypes = {
  loading: PropTypes.bool,
  phrase: PropTypes.array,
  sendAddPhrase: PropTypes.func,
};

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
