/**
 *
 * Container for both adding and viewing phrases.
 *
 * Things that need completing here:
 * - Dispatch to saga to add new phrase to store
 * - Dispatch to get all phrases from store
 * - Map over data returned from store to show each phrase in DOM
 */

import React, { memo, Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import makeSelectString from './selectors';
// import reducer from './reducer';
// import saga from './saga';

import {
  Wrapper,
  DisplayTitle,
  Display,
  Form,
  Label,
  Input,
} from '../../components/Styling/PhrasesStyle';

class Phrases extends Component {
  constructor(props) {
    super(props);

    this.state = {
      phrase: '',
      // phrases: [],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  async handleSubmit(evt) {
    evt.preventDefault();
    // let data = this.state.phrase;
    // FIXME Need to send call to Redux-Saga to send phrase to store.
  }

  handleChange(e) {
    this.setState({ phrase: e.target.value });
  }

  render() {
    return (
      <Wrapper>
        <DisplayTitle>Craft a Phrase</DisplayTitle>
        <Form>
          <Label htmlFor="phrase">Enter</Label>
          <Input
            id="phrase"
            type="text"
            placeholder="something here..."
            value={this.state.phrase}
            onChange={this.handleChange}
          />
        </Form>
        <DisplayTitle>Previously Entered Phrases</DisplayTitle>
        <Display>Space holder.</Display>
      </Wrapper>
    );
  }
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
