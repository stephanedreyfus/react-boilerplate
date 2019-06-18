import React from 'react';
import { render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router-dom';

import { Collection } from '../index';
import { DisplayTitle } from '../../../components/Styling/PhrasesStyle';
import configureStore from '../../../configureStore';

describe('<Collection />', () => {
  let store;

  beforeAll(() => {
    store = configureStore({}, browserHistory);
  });

  it.skip('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    const dispatch = jest.fn();
    render(<Collection dispatch={dispatch} />);
    expect(spy).not.toHaveBeenCalled();
  });

  it('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(
      <Provider store={store}>
        <IntlProvider locale="en">
          <Collection />
        </IntlProvider>
      </Provider>,
    );
    expect(firstChild).toMatchSnapshot();
  });

  it('should render its heading', () => {
    const {
      container: { firstChild },
    } = render(<DisplayTitle>Loading Phrases, Please Wait</DisplayTitle>);
    expect(firstChild).toMatchSnapshot();
  });
});
