/**
 *
 * Container for adding phrases.
 *
 * Things that need completing here:
 * - Dispatch to saga to add new phrase to store
 */

import React, { memo } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import makeSelectString from './selectors';
// import reducer from './reducer';
// import saga from './saga';

import DisplayField from '../../components/DisplayField';
import InputForm from '../../components/InputForm';
import { Wrapper, DisplayTitle } from '../../components/Styling/PhrasesStyle';

// Note in case of malfunction: ave removed export default from below.
// export default function Phrases() {
function Phrases() {
  return (
    <Wrapper>
      <DisplayTitle>Craft a Phrase</DisplayTitle>
      <InputForm />
      <DisplayTitle>Previously Entered Phrases</DisplayTitle>
      <DisplayField />
    </Wrapper>
  );
}

const mapStateToProps = createStructuredSelector({
  string: makeSelectString(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Phrases);
