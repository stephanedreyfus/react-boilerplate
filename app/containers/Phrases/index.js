/** Component for both adding and viewing phrases. */
import React, { Component } from 'react';
import styled from 'styled-components';

// Component styling
const mainColor = 'mediumvioletred';

const Wrapper = styled.section`
  background: #e0e2e5;
  height: 20em;
  width: 42%;
  border-radius: 6px;
  border: 0.1em solid ${mainColor};
  box-shadow: 5px 6px 8px ${mainColor};
  margin: 3em auto auto auto;
`;

const DisplayTitle = styled.div`
  font-family: 'Montserrat', sans-serif;
  color: ${mainColor};
  text-align: center;
  border-bottom: 0.1em solid ${mainColor};
  margin: 1em 3em;
`;

const Display = styled.div`
  font-family: 'Roboto', sans-serif;
  width: 85%;
  padding: 1em;
  margin: 0.5em 1em;
  border-radius: 10px;
  border-width: 1px;
`;

const Form = styled.form`
  font-family: 'Roboto', sans-serif;
  width: 85%;
  margin: auto;
`;

const Input = styled.input`
  width: 84%;
  padding: 0.2em;
  margin: 0.4em;
  border-radius: 10px;
  border-width: 1px;
`;

// Bring in array of phrases. Map over and display after component did mount.
// Display "No phrases yet." if no phrases.
// Display "Loading..." while phrases are sought.

class Phrases extends Component {
  constructor(props) {
    super(props);

    this.state = {
      phrase: '',
    };

    // this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  // async handleSubmit(evt) {
  //   evt.preventDefault();
  //   const phrase = this.state.phrase;

  //   try {
  //     result = await
  //   }
  // }

  handleChange(e) {
    this.setState({ phrase: e.target.value });
  }

  render() {
    return (
      <Wrapper>
        <DisplayTitle>Craft a Phrase</DisplayTitle>
        <Form>
          <label htmlFor="phrase">Enter</label>
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

export default Phrases;
