import React from 'react';

import { NavWrapper, NavBar, LinkElem } from '../Styling/NavBarStyle';

/** Top navgiation bar for the site. */

export default function App() {
  return (
    <NavWrapper>
      <NavBar>
        <LinkElem className="nav-link" exact to="/">
          Home
        </LinkElem>
        <LinkElem className="nav-link" exact to="/phrases">
          Add Phrase
        </LinkElem>
        <LinkElem className="nav-link" exact to="/collection">
          See Phrases
        </LinkElem>
      </NavBar>
    </NavWrapper>
  );
}
