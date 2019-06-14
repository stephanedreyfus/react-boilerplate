/* Styling for NavLinks in NavBar.js component. */
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavWrapper = styled.div`
  margin: 0;
  font-family: 'Montserrat', Helvetica, sans-serif;
`;

export const NavBar = styled.div`
  overflow: hidden;
  background-color: #333;
`;

export const LinkElem = styled(NavLink)`
  float: left;
  display: block;
  color: mediumvioletred;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;

  &:hover {
    background-color: #ddd;
    color: mediumvioletred;
  }

  &.active {
    color: lightseagreen;
  }
`;
