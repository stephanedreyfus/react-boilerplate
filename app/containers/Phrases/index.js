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

import DisplayField from '../../components/DisplayField';
import InputForm from '../../components/InputForm';
import { Wrapper, DisplayTitle } from '../../components/Styling/PhrasesStyle';

class Phrases extends PureComponent {
  static propTypes = { phraseToStore: PropTypes.func };

  addPhrase = phrase => {
    this.props.phraseToStore(phrase);
  };

  render() {
    return (
      <Wrapper>
        <DisplayTitle>Craft a Phrase</DisplayTitle>
        <InputForm addPhrase={this.addPhrase} />
        <DisplayTitle>Most Recently Added</DisplayTitle>
        <DisplayField />
      </Wrapper>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  phrases: makeSelectPhrase(),
});

const mapDispatchToProps = {
  phraseToStore: phrase => actions.addPhrase(phrase),
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Phrases);
