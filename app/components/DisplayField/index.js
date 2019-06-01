/**
 *
 * DisplayField
 * Component receives props of a phrases array from parent, maps over and displays.
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

// If no props, show loading message.
// If prop type is a message about no phrase, display that. This should happen
// when the display is a child of the add phrase page.

function DisplayField() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

DisplayField.propTypes = {};

export default DisplayField;
