import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { InputTextPassword } from './InputTextPassword';

describe('<InputTextPassword>', () => {
  const mockSetValue = jest.fn();

  const renderComponent = (overrides = {}) =>
    render(
      <InputTextPassword
        testId="test_id"
        value=""
        setValue={mockSetValue}
        {...overrides}
      />
    );
  it('should render the component', () => {
    const { getByTestId } = renderComponent();
    expect(getByTestId('InputText__test_id')).toBeDefined();
  });

  it('should change value and call back setValue when valid password', () => {
    const { getByTestId } = renderComponent();
    fireEvent.changeText(getByTestId('InputText__test_id'), 'Valid_Password');
    fireEvent.press(getByTestId('InputText__SecureText__test_id'));
    expect(mockSetValue).toHaveBeenCalledWith({
      isValid: true,
      value: 'Valid_Password',
    });
  });
  it('should change value and call back setValue when invalid password', () => {
    const { getByTestId } = renderComponent();
    fireEvent.changeText(getByTestId('InputText__test_id'), 'no');
    expect(mockSetValue).toHaveBeenCalledWith({
      isValid: false,
      value: 'no',
    });
  });
});
