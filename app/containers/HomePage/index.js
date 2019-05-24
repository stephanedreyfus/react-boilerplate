/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import styled from 'styled-components';

const Greeting = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: mediumvioletred;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: lavender;
`;

export default function HomePage() {
  return (
    <Wrapper>
      <Greeting>Welcome to phrase collector!</Greeting>
    </Wrapper>
  );
}
