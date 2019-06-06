/**
 * DisplayField
 * Component receives props of a 'phrases' array from parent, maps over and displays.
 */

import React, { PureComponent } from 'react';
import { PhraseList, ListItem } from '../Styling/PhrasesStyle';

class DisplayField extends PureComponent {
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
