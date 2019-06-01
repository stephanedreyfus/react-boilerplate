/**
 *
 * InputForm
 *
 */

import React, { Component } from 'react';
import { Form, Label, Input, PhraseButton } from '../Styling/InputStyle';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

class InputForm extends Component {
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
    // FIXME Need to send this data up to parent via function passed as prop.
  }

  handleChange(e) {
    this.setState({ phrase: e.target.value });
  }

  render() {
    return (
      <Form>
        <Label htmlFor="phrase">Enter</Label>
        <Input
          id="phrase"
          type="text"
          placeholder="something here..."
          value={this.state.phrase}
          onChange={this.handleChange}
        />
        <PhraseButton onClick={this.handleSubmit}>Add Phrase!</PhraseButton>
      </Form>
    );
  }
}

export default InputForm;
