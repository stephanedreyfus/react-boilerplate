/**
 *
 * DisplayField
 * Component receives props of a phrases array from parent, maps over and displays.
 *
 */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { PhraseList, ListItem } from '../Styling/PhrasesStyle';

// If no props, show loading message.
// If prop type is a message about no phrase, display that. This should happen
// when the display is a child of the add phrase page.

class DisplayField extends PureComponent {
  static propTypes = { getPhrases: PropTypes.func };

  // FIXME connect to saga
  componentDidMount = () => {
    this.props.getPhrases();
  };

  // FIXME determine where strings are coming from
  renderPhraseCollection = phrase =>
    phrase.map(p => <ListItem key={p.added} phrase={p.phrase} />);

  render() {
    return (
      <PhraseList>
        <ListItem>{this.renderPhraseCollection()}</ListItem>
      </PhraseList>
    );
  }
}

export default DisplayField;
