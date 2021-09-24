import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { ResetPassword } from './ResetPassword';

describe('<ResetPassword>', () => {
  const mockOnResetClick = jest.fn();
  const mockOnLoginClick = jest.fn();

  const renderComponent = (overrides = {}) =>
    render(
      <ResetPassword
        testId="test_id"
        showError={false}
        onResetClick={mockOnResetClick}
        onLoginClick={mockOnLoginClick}
        {...overrides}
      />
    );
  it('should render the component', () => {
    const { getByTestId } = renderComponent();
    expect(getByTestId('ResetPassword__test_id')).toBeDefined();
  });
  it('should render the component with error', () => {
    const { getByTestId } = renderComponent({ showError: true });
    expect(getByTestId('ResetPassword__test_id')).toBeDefined();
    expect(
      getByTestId('Paragraph__ResetPassword__Error__test_id')
    ).toBeDefined();
  });
  it('should call back when login link is clicked', () => {
    const { getByTestId } = renderComponent();
    fireEvent.press(getByTestId('ResetPassword__Login__test_id'));
    expect(mockOnLoginClick).toHaveBeenCalled();
  });
  it('should NOT call back when form is invalid for reset password', () => {
    const { getByTestId } = renderComponent();
    fireEvent.press(getByTestId('ResetPassword__Submit__test_id'));
    expect(mockOnResetClick).not.toHaveBeenCalled();
  });
  it('should call back when form is valid for reset password', () => {
    const { getByTestId } = renderComponent();
    fireEvent.changeText(
      getByTestId('InputText__ResetPassword__Email__test_id'),
      'valid@email.com'
    );
    fireEvent.press(getByTestId('ResetPassword__Submit__test_id'));
    expect(mockOnResetClick).toHaveBeenCalled();
  });
});
