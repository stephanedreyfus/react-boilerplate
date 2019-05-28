/**
 *
 * Component for both adding and viewing phrases.
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

// import { useInjectSaga } from 'utils/injectSaga';
// import { useInjectReducer } from 'utils/injectReducer';
// import makeSelectString from './selectors';
// import reducer from './reducer';
// import saga from './saga';

import {
  Wrapper,
  DisplayTitle,
  Display,
  Form,
  Label,
  Input,
} from '../../components/Styling/PhrasesStyle';

export function Phrases() {
  // useInjectReducer({ key: 'string', reducer });
  // useInjectSaga({ key: 'string', saga });

  return (
    <Wrapper>
      <DisplayTitle>Craft a Phrase</DisplayTitle>
      <Form>
        <Label htmlFor="phrase">Enter</Label>
        <Input
          id="phrase"
          type="text"
          placeholder="something here..."
          // value={this.state.phrase}
          // onChange={this.handleChange}
        />
      </Form>
      <DisplayTitle>Previously Entered Phrases</DisplayTitle>
      <Display>Space holder.</Display>
    </Wrapper>
  );
}

// String.propTypes = {
//   dispatch: PropTypes.func.isRequired,
// };

// const mapStateToProps = createStructuredSelector({
//   string: makeSelectString(),
// });

// function mapDispatchToProps(dispatch) {
//   return {
//     dispatch,
//   };
// }

// const withConnect = connect(
//   mapStateToProps,
//   mapDispatchToProps,
// );

export default compose(
  // withConnect,
  memo,
)(Phrases);
