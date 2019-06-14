/**
 * DisplayField
 * Component receives props of a 'phrases' array from parent, maps over and displays.
 */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { PhraseList, ListItem } from '../Styling/PhrasesStyle';

class DisplayField extends PureComponent {
  /**
   * If an array is coming through, map over to produce list
   * If no array comes through, show error
   */

  renderPhraseCollection = phrases => {
    if (phrases && phrases.length > 1) {
      const toDisplay = phrases.map(p => (
        <ListItem key={p.added}>{p.phrase}</ListItem>
      ));
      return toDisplay;
    }
    return <ListItem>Nothing To Display Yet</ListItem>;
  };

  render() {
    return (
      <PhraseList>{this.renderPhraseCollection(this.props.phrases)}</PhraseList>
    );
  }
}

DisplayField.propTypes = {
  phrases: PropTypes.array,
};

export default DisplayField;
