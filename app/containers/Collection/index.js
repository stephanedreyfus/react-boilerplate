/**
 * Collection container:
 * Connects to store to retrieve and display all entered phrases.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { props } from 'bluebird';
import saga from './saga';
import reducer from './reducer';

import DisplayField from '../../components/DisplayField';
import { Wrapper, DisplayTitle } from '../../components/Styling/PhrasesStyle';

const key = 'collection';
let loaded;
let notLoaded;

export function Collection() {
  // FIXME Refactor component:
  // Change injectors
  // Add loaded toggle to store
  // Add getPhrase equivalent
  // Add elements to control child input component

  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  if (props.loading) {
    // If phrases have been loaded, render the following:
    loaded = (
      <Wrapper>
        <DisplayTitle>Collected Phrases</DisplayTitle>
        <DisplayField phrases={props.phrases} />
      </Wrapper>
    );
  } else {
    // FIXME Replace Loading phrase with loading graphic component
    // If no phrases are loaded, render the following:
    notLoaded = (
      <Wrapper>
        <DisplayTitle>Loading Phrases, Please Wait</DisplayTitle>
      </Wrapper>
    );
  }

  return <Wrapper>{props.loading === true ? loaded : notLoaded}</Wrapper>;
}

Collection.propTypes = {
  loading: PropTypes.bool,
  phrases: PropTypes.array,
};

function mapStateToProps(state) {
  return {
    phrases: state.collection.phrases,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Collection);
