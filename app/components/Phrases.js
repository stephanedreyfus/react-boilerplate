import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  background: gray;
  height: 80%;
  width: 40%;
  border-radius: 10px;
  border-width: 3px;
`;

const DisplayTitle = styled.div`
  font-family: 'Roboto', sans-serif;
  color: mediumvioletred;
  text-align: center;
  border-radius: 10px;
  border-width: 1px;
`;

const Display = styled.div`
  width: 85%;
  padding: 1em
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
