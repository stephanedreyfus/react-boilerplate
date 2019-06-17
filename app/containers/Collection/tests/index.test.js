import React from 'react';
import { render } from 'react-testing-library';

import { Collection } from '../index';

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
});
