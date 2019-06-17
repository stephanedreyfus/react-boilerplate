/**
 * Collection container:
 * Connects to store to retrieve and display all entered phrases.
 */

import React, { useEffect, memo } from 'react';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import saga from './saga';
import reducer from './reducer';

import { getPhrases } from './actions';
import {
  makeSelectPhrases,
  makeSelectLoading,
  makeSelectError,
} from './selectors';

import DisplayField from '../../components/DisplayField';
import { Wrapper, DisplayTitle } from '../../components/Styling/PhrasesStyle';

const key = 'collection';
let loaded;
let notLoaded;

export function Collection({ phrases, loading, sendGetPhrases }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    if (phrases.length === 0) sendGetPhrases();
  }, []);

  if (loading) {
    // FUTUREFIX Replace Loading phrase with loading graphic component
    // If no phrases are loaded, render the following:
    notLoaded = <DisplayTitle>Loading Phrases, Please Wait</DisplayTitle>;
  } else {
    // If phrases have been loaded, render the following:
    loaded = (
      <>
        <DisplayTitle>Collected Phrases</DisplayTitle>
        <DisplayField phrases={phrases} />
      </>
    );
  }

  return <Wrapper>{loading === true ? notLoaded : loaded}</Wrapper>;
}

Collection.propTypes = {
  loading: PropTypes.bool,
  phrases: PropTypes.array,
  sendGetPhrases: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  phrases: makeSelectPhrases(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

function mapDispatchToProps(dispatch) {
  return {
    sendGetPhrases: () => dispatch(getPhrases()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Collection);
