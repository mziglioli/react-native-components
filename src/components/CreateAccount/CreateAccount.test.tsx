import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { CreateAccount } from './CreateAccount';

describe('<CreateAccount>', () => {
  const mockOnSignupClick = jest.fn();
  const mockOnLoginClick = jest.fn();

  const renderComponent = (overrides = {}) =>
    render(
      <CreateAccount
        testId="test_id"
        showError={false}
        onSignUpClick={mockOnSignupClick}
        onLoginClick={mockOnLoginClick}
        {...overrides}
      />
    );
  it('should render the component', () => {
    const { getByTestId } = renderComponent();
    expect(getByTestId('CreateAccount__test_id')).toBeDefined();
  });
  it('should render the component with error', () => {
    const { getByTestId } = renderComponent({ showError: true });
    expect(getByTestId('CreateAccount__test_id')).toBeDefined();
    expect(
      getByTestId('Paragraph__CreateAccount__Error__test_id')
    ).toBeDefined();
  });
  it('should call back when login link is clicked', () => {
    const { getByTestId } = renderComponent();
    fireEvent.press(getByTestId('CreateAccount__Login__test_id'));
    expect(mockOnLoginClick).toHaveBeenCalled();
  });
  it('should NOT call back when form is invalid for signup', () => {
    const { getByTestId } = renderComponent();
    fireEvent.press(getByTestId('CreateAccount__Submit__test_id'));
    expect(mockOnSignupClick).not.toHaveBeenCalled();
  });
  it('should call back when form is valid for signup', () => {
    const { getByTestId } = renderComponent();
    fireEvent.changeText(
      getByTestId('InputText__CreateAccount__Name__test_id'),
      'Valid Name'
    );
    fireEvent.changeText(
      getByTestId('InputText__CreateAccount__Email__test_id'),
      'valid@email.com'
    );
    fireEvent.changeText(
      getByTestId('InputText__CreateAccount__Password__test_id'),
      'valid_password'
    );
    fireEvent.press(getByTestId('CreateAccount__Submit__test_id'));
    expect(mockOnSignupClick).toHaveBeenCalled();
  });
});
