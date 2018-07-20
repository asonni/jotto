import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, checkProps } from '../../test/testUtils';
import NewWordButton from './NewWordButton';

const defaultProps = { display: false };

/**
 * Factory function to create a ShallowWrapper for the NewWordButton component.
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<NewWordButton {...setupProps} />);
};

describe('render', () => {
  it('renders without error', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'new-word-button-component');
    expect(component.length).toBe(1);
  });

  it('renders no text when `display` prop is false', () => {
    const wrapper = setup({ display: false });
    const component = findByTestAttr(wrapper, 'new-word-button-component');
    expect(component.text()).toBe('');
  });

  it('renders non-empty text when `display` prop is true', () => {
    const wrapper = setup({ display: true, resetAction: () => {} });
    const component = findByTestAttr(wrapper, 'new-word-button-component');
    expect(component.text().length).not.toBe(0);
  });
});

it('does not throw warning with expected props', () => {
  const expectedProps = { display: false, resetAction: () => {} };
  checkProps(NewWordButton, expectedProps);
});

it('calls `resetAction` prop upon button click', () => {
  // create a mock function so we can see whether it's called on click
  const resetActionMock = jest.fn();
  const wrapper = setup({ display: true, resetAction: resetActionMock });
  // find the button (which is the top level element of this component)
  const resetButton = findByTestAttr(wrapper, 'new-word-button-component');
  resetButton.simulate('click');
  // expect the mock to have been called once
  expect(resetActionMock.mock.calls.length).toBe(1);
});
