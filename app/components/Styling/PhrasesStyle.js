/** Styled components for Phrases */

import styled from 'styled-components';

const mainColor = 'mediumvioletred';

export const Wrapper = styled.section`
  background: #e0e2e5;
  min-height: 20em;
  width: 42%;
  border-radius: 6px;
  border: 0.1em solid ${mainColor};
  box-shadow: 5px 6px 8px ${mainColor};
  margin: 3em auto auto auto;
`;

export const DisplayTitle = styled.div`
  font-family: 'Montserrat', sans-serif;
  color: ${mainColor};
  text-align: center;
  border-bottom: 0.1em solid ${mainColor};
  margin: 1em 3em;
`;

export const Display = styled.div`
  font-family: 'Roboto', sans-serif;
  width: 85%;
  padding: 1em;
  margin: 0.5em 1em;
  border-radius: 10px;
  border-width: 1px;
`;

export const PhraseList = styled.ul`
  list-style: none;
  margin-left: 3em;
`;

export const ListItem = styled.li`
  margin: auto;
`;

export const NoPhrase = styled.h4`
  margin-left: 3em;
  color: ${mainColor};
`;
