/**
 * Container for adding phrases.
 * Eventually will display most recently added phrase.
 */

import React, { memo, PureComponent } from 'react';
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

class Phrases extends PureComponent {
  static propTypes = { addPhrase: PropTypes.func, phrase: PropTypes.array };

  render() {
    return (
      <Wrapper>
        <DisplayTitle>Craft a Phrase</DisplayTitle>
        <InputForm addPhrase={this.props.addPhrase} />
        <DisplayTitle>Most Recently Added</DisplayTitle>
        <DisplayField phrase={this.props.phrase} />
      </Wrapper>
    );
  }
}

// FIXME Implement getting latest addition from state
const mapStateToProps = createStructuredSelector({
  phrases: makeSelectPhrase(),
});

const mapDispatchToProps = {
  addPhrase: phrase => addPhrase(phrase),
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Phrases);
