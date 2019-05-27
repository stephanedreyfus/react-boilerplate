/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */
import React from 'react';
import styled from 'styled-components';

const mainColor = 'mediumvioletred';

const Wrapper = styled.section`
  padding: 4em;
  background: lavender;
`;

const Greeting = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: ${mainColor};
  background: #e0e2e5;
  border-radius: 6px;
  border: 0.1em solid ${mainColor};
  box-shadow: 5px 6px 8px ${mainColor};
  margin: 3em auto auto auto;
  width: 50%;
`;

const Link = styled.a`
  font-size: 1em;
  text-align: center;
  color: ${mainColor};

  ${Link}:hover & {
    color: black;
    transition: color 1s;
  }
`;

export default function HomePage() {
  return (
    <Wrapper>
      <Greeting>
        Welcome to phrase collector!
        <br />
        <br />
        <Link href="/phrases">Add and See Phrases</Link>
      </Greeting>
    </Wrapper>
  );
}
