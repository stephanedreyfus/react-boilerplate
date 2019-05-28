/**
 *
 * Component for both adding and viewing phrases.
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import styled from 'styled-components';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectString from './selectors';
import reducer from './reducer';
import saga from './saga';

// Component styling
const mainColor = 'mediumvioletred';

const Wrapper = styled.section`
  background: #e0e2e5;
  height: 20em;
  width: 42%;
  border-radius: 6px;
  border: 0.1em solid ${mainColor};
  box-shadow: 5px 6px 8px ${mainColor};
  margin: 3em auto auto auto;
`;

const DisplayTitle = styled.div`
  font-family: 'Montserrat', sans-serif;
  color: ${mainColor};
  text-align: center;
  border-bottom: 0.1em solid ${mainColor};
  margin: 1em 3em;
`;

const Display = styled.div`
  font-family: 'Roboto', sans-serif;
  width: 85%;
  padding: 1em;
  margin: 0.5em 1em;
  border-radius: 10px;
  border-width: 1px;
`;

const Form = styled.form`
  font-family: 'Roboto', sans-serif;
  width: 85%;
  margin: auto;
`;

const Input = styled.input`
  width: 84%;
  padding: 0.2em;
  margin: 0.4em;
  border-radius: 10px;
  border-width: 1px;
`;

export function String() {
  useInjectReducer({ key: 'string', reducer });
  useInjectSaga({ key: 'string', saga });

  return (
    <Wrapper>
      <Helmet>
        <DisplayTitle>Craft a Phrase</DisplayTitle>
        <Form>
          <label htmlFor="phrase">Enter</label>
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
      </Helmet>
    </Wrapper>
  );
}

// String.propTypes = {
//   dispatch: PropTypes.func.isRequired,
// };

const mapStateToProps = createStructuredSelector({
  string: makeSelectString(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(String);
