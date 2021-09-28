import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { ResendEmail } from './ResendEmail';

describe('<ResendEmail>', () => {
  const mockOnResetClick = jest.fn();
  const mockOnLoginClick = jest.fn();

  const renderComponent = (overrides = {}) =>
    render(
      <ResendEmail
        title="Resend Email"
        buttonTitle="RESEND"
        testId="test_id"
        showError={false}
        onResetClick={mockOnResetClick}
        onLoginClick={mockOnLoginClick}
        {...overrides}
      />
    );
  it('should render the component', () => {
    const { getByTestId } = renderComponent();
    expect(getByTestId('ResendEmail__test_id')).toBeDefined();
  });
  it('should render the component with error', () => {
    const { getByTestId } = renderComponent({ showError: true });
    expect(getByTestId('ResendEmail__test_id')).toBeDefined();
    expect(getByTestId('Paragraph__ResendEmail__Error__test_id')).toBeDefined();
  });
  it('should call back when login link is clicked', () => {
    const { getByTestId } = renderComponent();
    fireEvent.press(getByTestId('ResendEmail__Login__test_id'));
    expect(mockOnLoginClick).toHaveBeenCalled();
  });
  it('should NOT call back when form is invalid for reset password', () => {
    const { getByTestId } = renderComponent();
    fireEvent.press(getByTestId('ResendEmail__Submit__test_id'));
    expect(mockOnResetClick).not.toHaveBeenCalled();
  });
  it('should call back when form is valid for reset password', () => {
    const { getByTestId } = renderComponent();
    fireEvent.changeText(
      getByTestId('InputText__ResendEmail__Email__test_id'),
      'valid@email.com'
    );
    fireEvent.press(getByTestId('ResendEmail__Submit__test_id'));
    expect(mockOnResetClick).toHaveBeenCalled();
  });
});
