import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import Phrases from '../index';

const renderer = new ShallowRenderer();

describe('<Phrases />', () => {
  it('should render and match the snapshot', () => {
    renderer.render(<Phrases />);
    const renderedOutput = renderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });
});
