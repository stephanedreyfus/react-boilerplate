/**
 *
 * DisplayField
 * Component receives props of a phrases array from parent, maps over and displays.
 *
 */

import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
import { PhraseList, ListItem } from '../Styling/PhrasesStyle';

// If no props, show loading message.
// If prop type is a message about no phrase, display that. This should happen
// when the display is a child of the add phrase page.

class DisplayField extends PureComponent {
  // static propTypes = { getPhrases: PropTypes.func };

  // FIXME determine where strings are coming from
  /**
   * If an array is coming through, map over to produce list
   * If one phrase comes through, post as one
   * If no array comes through, show error
   */
  renderPhraseCollection = collection => {
    if (collection.length === 1) {
      return <ListItem key={collection.added} phrase={collection.phrase} />;
    }
    if (collection.length > 1) {
      return collection.map(p => <ListItem key={p.added} phrase={p.phrase} />);
    }
    return <ListItem>Unable to Load Phrases</ListItem>;
  };

  render() {
    return (
      <PhraseList>
        <ListItem>{this.renderPhraseCollection()}</ListItem>
      </PhraseList>
    );
  }
}

export default DisplayField;
