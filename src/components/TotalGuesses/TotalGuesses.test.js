import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr } from '../../test/testUtils';
import TotalGuesses from './TotalGuesses';

const defaultProps = { guessCount: 0 };

/**
 * Factory function to create a ShallowWrapper for the TotalGuesses component.
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<TotalGuesses {...setupProps} />);
};

it('renders without error', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'total-guesses-component');
  expect(component.length).toBe(1);
});

it('renders the number of guesses', () => {
  const guessCount = 8;
  const wrapper = setup({ guessCount });
  const component = findByTestAttr(wrapper, 'total-guesses-component');
  expect(component.text()).toContain(guessCount.toString());
});
