import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { Login } from './Login';

describe('<Login>', () => {
  const mockOnSignupClick = jest.fn();
  const mockOnLoginClick = jest.fn();
  const mockOnForgotPasswordClick = jest.fn();

  const renderComponent = (overrides = {}) =>
    render(
      <Login
        testId="test_id"
        showError={false}
        onSignUpClick={mockOnSignupClick}
        onLoginClick={mockOnLoginClick}
        onForgotPasswordClick={mockOnForgotPasswordClick}
        withSecret={false}
        {...overrides}
      />
    );
  it('should render the component', () => {
    const { getByTestId } = renderComponent();
    expect(getByTestId('Login__test_id')).toBeDefined();
  });
  it('should render the component with error', () => {
    const { getByTestId } = renderComponent({ showError: true });
    expect(getByTestId('Login__test_id')).toBeDefined();
    expect(getByTestId('Paragraph__Login__Error__test_id')).toBeDefined();
  });
  it('should call back when signup link is clicked', () => {
    const { getByTestId } = renderComponent();
    fireEvent.press(getByTestId('Login__Signup__test_id'));
    expect(mockOnSignupClick).toHaveBeenCalled();
  });
  it('should NOT call back when form is invalid for login', () => {
    const { getByTestId } = renderComponent();
    fireEvent.press(getByTestId('Login__Submit__test_id'));
    expect(mockOnLoginClick).not.toHaveBeenCalled();
  });
  it('should NOT call back when form is invalid for login secret empty', () => {
    const { getByTestId } = renderComponent({ withSecret: true });
    fireEvent.press(getByTestId('Login__Submit__test_id'));
    expect(mockOnLoginClick).not.toHaveBeenCalled();
  });
  it('should call back when form is valid for login', () => {
    const { getByTestId } = renderComponent();
    fireEvent.changeText(
      getByTestId('InputText__Login__Email__test_id'),
      'valid@email.com'
    );
    fireEvent.changeText(
      getByTestId('InputText__Login__Password__test_id'),
      'valid_password'
    );
    fireEvent.press(getByTestId('Login__Submit__test_id'));
    expect(mockOnLoginClick).toHaveBeenCalled();
  });
  it('should call back when form is valid for login with secret', () => {
    const { getByTestId } = renderComponent({ withSecret: true });
    fireEvent.changeText(
      getByTestId('InputText__Login__Email__test_id'),
      'valid@email.com'
    );
    fireEvent.changeText(
      getByTestId('InputText__Login__Password__test_id'),
      'valid_password'
    );
    fireEvent.changeText(
      getByTestId('InputText__Login__Secret__test_id'),
      '1234'
    );
    fireEvent.press(getByTestId('Login__Submit__test_id'));
    expect(mockOnLoginClick).toHaveBeenCalled();
  });
});
