/**
 *
 * Container for adding phrases.
 *
 * Things that need completing here:
 * - Dispatch to saga to add new phrase to store
 */

import React, { memo, PureComponent } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import PropTypes from 'prop-types';

import makeSelectPhrase from './selectors';
import * as actions from './actions';

// import DisplayField from '../../components/DisplayField';
import InputForm from '../../components/InputForm';
import { Wrapper, DisplayTitle } from '../../components/Styling/PhrasesStyle';

class Phrases extends PureComponent {
  static propTypes = { addPhrase: PropTypes.func };

  // <DisplayField phrases={this.phrases[0]} />
  render() {
    return (
      <Wrapper>
        <DisplayTitle>Craft a Phrase</DisplayTitle>
        <InputForm addPhrase={this.props.addPhrase} />
        <DisplayTitle>Most Recently Added</DisplayTitle>
      </Wrapper>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  phrases: makeSelectPhrase(),
});

const mapDispatchToProps = {
  addPhrase: phrase => actions.addPhrase(phrase),
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Phrases);
