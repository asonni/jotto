import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, storeFactory } from './test/testUtils';
import Input from './Input';

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  return shallow(<Input store={store} />).dive();
};

describe('render', () => {
  describe('word has not been guessed', () => {
    let wrapper;

    beforeEach(() => {
      const initialState = { success: false };
      wrapper = setup(initialState);
    });

    it('renders input component without error', () => {
      const component = findByTestAttr(wrapper, 'input-component');
      expect(component.length).toBe(1);
    });

    it('renders input box', () => {
      const inputBox = findByTestAttr(wrapper, 'input-box');
      expect(inputBox.length).toBe(1);
    });

    it('renders submit button', () => {
      const submitButton = findByTestAttr(wrapper, 'submit-button');
      expect(submitButton.length).toBe(1);
    });
  });

  describe('word has been guessed', () => {
    let wrapper;

    beforeEach(() => {
      const initialState = { success: true };
      wrapper = setup(initialState);
    });

    it('renders input component without error', () => {
      const component = findByTestAttr(wrapper, 'input-component');
      expect(component.length).toBe(1);
    });

    it('does not renders input box', () => {
      const inputBox = findByTestAttr(wrapper, 'input-box');
      expect(inputBox.length).toBe(0);
    });

    it('does not renders submit button', () => {
      const submitButton = findByTestAttr(wrapper, 'submit-button');
      expect(submitButton.length).toBe(0);
    });
  });
});

describe('redux props', () => {
  it('has success pice of state as props', () => {
    const success = true;
    const wrapper = setup({ success });
    const successProp = wrapper.instance().props.success;
    expect(successProp).toBe(success);
  });

  it('`guessWord` action creator is a function prop', () => {
    const wrapper = setup();
    const guessWordProp = wrapper.instance().props.guessWord;
    expect(guessWordProp).toBeInstanceOf(Function);
  });
});
