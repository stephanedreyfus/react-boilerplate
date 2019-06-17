import React from 'react';
import { render } from 'react-testing-library';

import { Collection } from '../index';
import { DisplayTitle } from '../../../components/Styling/PhrasesStyle';

describe('<Collection />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    const dispatch = jest.fn();
    render(<Collection dispatch={dispatch} />);
    expect(spy).not.toHaveBeenCalled();
  });

  it('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(<Collection />);
    expect(firstChild).toMatchSnapshot();
  });

  it('should render its heading', () => {
    const {
      container: { firstChild },
    } = render(<DisplayTitle>Loading Phrases, Please Wait</DisplayTitle>);

    expect(firstChild).toMatchSnapshot();
  });
});
