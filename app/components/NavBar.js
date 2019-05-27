import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import './NavBar.css';

/** Top navgiation bar for the site. */

/** Both styled components and a css file were used do to congflict
 * with react-router NavLink */
const NavWrapper = styled.div`
  margin: 0;
  font-family: 'Montserrat', Helvetica, sans-serif;
`;

const NavBar = styled.div`
  overflow: hidden;
  background-color: #333;
`;

export default function App() {
  return (
    <NavWrapper>
      <NavBar>
        <NavLink className="nav-link" exact to="/">
          Home
        </NavLink>
        <NavLink className="nav-link" exact to="/phrases">
          Phrases
        </NavLink>
      </NavBar>
    </NavWrapper>
  );
}
