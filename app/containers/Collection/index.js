/**
 * Collection container:
 * Connects to store to retrieve and display all entered phrases.
 */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import reducer from './reducer';
import saga from './saga';

import DisplayField from '../../components/DisplayField';
import {
  Wrapper,
  DisplayTitle,
  PhraseList,
} from '../../components/Styling/PhrasesStyle';

// export function Collection() {
//   useInjectReducer({ key: 'collection', reducer });
//   useInjectSaga({ key: 'collection', saga });

//   return <div />;
// }

class Collection extends PureComponent {
  static propTypes = { getPhrases: PropTypes.func };

  constructor(props) {
    super(props);

    this.state = {
      phrases: [],
      loaded: false,
    };

    this.getPhrases = this.getPhrases.bind(this);
  }

  // If phrases have been loaded, render the following:
  phrasesLoaded() {
    return (
      <Wrapper>
        <DisplayTitle>Collected Phrases</DisplayTitle>
        <DisplayField phrases={this.state.phrases} />
      </Wrapper>
    );
  }

  // FIXME Replace Loading phrase with loading graphic component
  // If no phrases are loaded, render the following:
  phraseNotLoaded() {
    return (
      <Wrapper>
        <DisplayTitle>Loading Phrases, Please Wait</DisplayTitle>
      </Wrapper>
    );
  }

  render() {
    return (
      <Wrapper>
        {this.state.loaded === true
          ? this.phrasesLoaded()
          : this.phraseNotLoaded()}
      </Wrapper>
    );
  }
}

Collection.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    phrases: state.phrases,
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
