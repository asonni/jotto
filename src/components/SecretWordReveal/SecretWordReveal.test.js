import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, checkProps } from '../../test/testUtils';
import SecretWordReveal from './SecretWordReveal';

const secretWord = 'party';
const defaultProps = { display: false, secretWord };

/**
 * Factory function to create a ShallowWrapper for the SecretWordReveal component.
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<SecretWordReveal {...setupProps} />);
};

it('renders without error', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'secret-word-reveal-component');
  expect(component.length).toBe(1);
});

it('renders no text when `display` prop is false', () => {
  const wrapper = setup({ display: false });
  const component = findByTestAttr(wrapper, 'secret-word-reveal-component');
  expect(component.text()).toBe('');
});

it('renders message containing secret word when `display` prop is true', () => {
  const wrapper = setup({ display: true });
  const message = findByTestAttr(wrapper, 'reveal-message');
  expect(message.text()).toContain(secretWord);
});

it('does not throw warning with expected props', () => {
  const expectedProps = { display: false, secretWord };
  checkProps(SecretWordReveal, expectedProps);
});
