/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */
import React from 'react';
import {
  Wrapper,
  Greeting,
  Link,
} from '../../components/Styling/HomePageStyle';

export default function HomePage() {
  return (
    <Wrapper>
      <Greeting>
        Welcome to phrase collector!
        <br />
        <br />
        <Link href="/phrases">Add</Link> and <Link href="/collection">See</Link>{' '}
        Phrases
      </Greeting>
    </Wrapper>
  );
}
