/**
 *
 * Tests for InputForm
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react';
import { render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';

import Enzyme, { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import InputForm from '../index';
import { DEFAULT_LOCALE } from '../../../i18n';

Enzyme.configure({ adapter: new Adapter() });

describe('<InputForm />', () => {
  let wrapper;
  let phraseInput;

  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(
      <IntlProvider locale={DEFAULT_LOCALE}>
        <InputForm />
      </IntlProvider>,
    );
    expect(spy).not.toHaveBeenCalled();
  });

  it('matches snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('Should change "phrase" in state', () => {
    wrapper = mount(<InputForm />);
    phraseInput = wrapper.find('#phrase').at(2);
    phraseInput.instance().value = 'test phrase';
    phraseInput.simulate('change');

    expect(wrapper.state().phrase).toEqual('test phrase');
  });

  // FIXME Still debugging why the mocked submit will not function.
  it('runs a mocked fn on submit', () => {
    const submitFn = jest.fn();
    wrapper = mount(<InputForm onClick={submitFn} />);
    const form = wrapper.find('form');
    form.simulate('submit');

    expect(submitFn).toHaveBeenCalled();
  });
});
