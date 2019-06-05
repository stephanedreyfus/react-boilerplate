/**
 *
 * DisplayField
 * Component receives props of a phrases array from parent, maps over and displays.
 *
 */

import React, { PureComponent } from 'react';
import { PhraseList, PhraseListItem } from '../Styling/PhrasesStyle';

// If no props, show loading message.
// If prop type is a message about no phrase, display that. This should happen
// when the display is a child of the add phrase page.

class DisplayField extends PureComponent {

  // FIXME connect to saga
  componentDidMount = () => {
    this.props.getPhrases();
  };

  // FIXME determine where strings are coming from
  renderPhraseCollection = strings =>
    strings.map((string, added) => (
      <PhraseListItem key={added} string={string.string} />
    ));

  render() {
    return (
      <PhraseList>
        <PhraseListItem>{this.renderPhraseCollection()}</PhraseListItem>
      </PhraseList>
    );
  }
}

export default DisplayField;
