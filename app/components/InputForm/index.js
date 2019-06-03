/**
 * InputForm
 * Takes in phrase and passes it up to container/parent to send to store.
 */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  Form,
  Label,
  Input,
  PhraseButton,
  LabelInputWrapper,
} from '../Styling/InputStyle';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

class InputForm extends PureComponent {
  static propTypes = { addPhrase: PropTypes.func };

  constructor(props) {
    super(props);

    this.state = {
      phrase: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    // Does not accept phrase if it contains only spaces.
    if (this.state === undefined || this.state.phrase.trim === undefined) {
      // FIXME Make this a custom alert or a modal
      alert('Please use at least one character or number.');
    } else {
      this.props.addPhrase(this.state.phrase);
    }
  }

  handleChange(e) {
    this.setState({ phrase: e.target.value });
  }

  render() {
    return (
      <Form>
        <LabelInputWrapper>
          <Label htmlFor="phrase">Enter a Phrase Below</Label>
          <Input
            id="phrase"
            type="text"
            placeholder="Write anything at all!"
            value={this.state.phrase}
            onChange={this.handleChange}
          />
        </LabelInputWrapper>
        <PhraseButton onClick={this.handleSubmit}>Add Phrase!</PhraseButton>
      </Form>
    );
  }
}

export default InputForm;
