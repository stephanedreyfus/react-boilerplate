import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  background: #e0e2e5;
  min-height: 80%;
  width: 40%;
  border-radius: 6px;
  border: 0.1em solid mediumvioletred;
  box-shadow: -2em -2em;
`;

const DisplayTitle = styled.div`
  font-family: 'Montserrat', sans-serif;
  color: mediumvioletred;
  text-align: center;
  border-bottom: 0.1em solid mediumvioletred;
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

// Bring in array of phrases. Map over and display after component did mount.
// Display "No phrases yet." if no phrases.
// Display "Loading..." while phrases are sought.

export default function Phrases() {
  return (
    <Wrapper>
      <DisplayTitle>Previously Entered Phrases</DisplayTitle>
      <Display>Space holder.</Display>
    </Wrapper>
  );
}
