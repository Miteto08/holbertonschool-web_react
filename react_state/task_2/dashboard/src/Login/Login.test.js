import React from 'react';
import { shallow } from 'enzyme';
import { StyleSheet, css, StyleSheetTestUtils } from 'aphrodite';
import Login from './Login';

const styles = StyleSheet.create({
  body: {
    fontSize: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  button: {
    borderRadius: '4px',
    border: '1px solid #ccc',
    backgroundColor: 'white',
  },
  form: {
    fontWeight: 'bold',
    display: 'inline-block',
    marginRight: '10px',
  },
  input: {
    border: '1px solid #ccc',
  },
  label: {
    marginRight: '10px',
    fontWeight: 'bold',
  }
});

const bodyClassName = css(styles.body);
const buttonClassName = css(styles.button);
const inputClassName = css(styles.input);
const labelClassName = css(styles.label);

describe('Login Component', () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('should render without crashing', () => {
    const mockLogIn = jest.fn();
    const wrapper = shallow(<Login logIn={mockLogIn} />);
    expect(wrapper.exists()).toBe(true);
  });

  it('should render 3 input tags and 2 label tags', () => {
    const mockLogIn = jest.fn();
    const wrapper = shallow(<Login logIn={mockLogIn} />);
    expect(wrapper.find('input').length).toBe(3);
    expect(wrapper.find('label').length).toBe(2);
  });

  describe('Style Tests', () => {
    it('should apply the correct style to the body div', () => {
      const mockLogIn = jest.fn();
      const wrapper = shallow(<Login logIn={mockLogIn} />);
      expect(wrapper.find('div').first().hasClass(bodyClassName)).toBe(true);
    });

    it('should apply the correct styles to input tags', () => {
      const mockLogIn = jest.fn();
      const wrapper = shallow(<Login logIn={mockLogIn} />);
      const inputs = wrapper.find('input');
      expect(inputs.at(0).prop('className')).toContain('input');
      expect(inputs.at(1).prop('className')).toContain('input');
    });

    it('should apply the correct style to label tags', () => {
      const mockLogIn = jest.fn();
      const wrapper = shallow(<Login logIn={mockLogIn} />);
      const labels = wrapper.find('label');
      expect(labels.at(0).prop('className')).toContain('label');
      expect(labels.at(1).prop('className')).toContain('label');
    });

    it('should apply the correct style to the button', () => {
      const mockLogIn = jest.fn();
      const wrapper = shallow(<Login logIn={mockLogIn} />);
      const button = wrapper.find('input[type="submit"]');
      expect(button.prop('className')).toContain('button');
    });
  });

  describe('Button Enable/Disable Tests', () => {
    it('should disable the submit button by default', () => {
      const mockLogIn = jest.fn();
      const wrapper = shallow(<Login logIn={mockLogIn} />);
      const button = wrapper.find('input[type="submit"]');
      expect(button.prop('disabled')).toBe(true);
    });

    it('should enable the submit button when email and password are both non-empty', () => {
      const mockLogIn = jest.fn();
      const wrapper = shallow(<Login logIn={mockLogIn} />);
      wrapper.find('input[type="email"]').simulate('change', { target: { value: 'test@example.com' } });
      wrapper.find('input[type="password"]').simulate('change', { target: { value: 'password123' } });

      const button = wrapper.find('input[type="submit"]');
      expect(button.prop('disabled')).toBe(false);
    });
  });
});