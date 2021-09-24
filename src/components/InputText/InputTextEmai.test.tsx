import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { InputTextEmail } from './InputTextEmail';

describe('<InputTextEmail>', () => {
  const mockSetValue = jest.fn();

  const renderComponent = (overrides = {}) =>
    render(
      <InputTextEmail
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

  it('should change value and call back setValue', () => {
    const { getByTestId } = renderComponent();
    fireEvent.changeText(getByTestId('InputText__test_id'), 'valid@email.com');
    expect(mockSetValue).toHaveBeenCalledWith({
      isValid: true,
      value: 'valid@email.com',
    });
  });
  it('should change value and call back setValue when invalid email', () => {
    const { getByTestId } = renderComponent();
    fireEvent.changeText(getByTestId('InputText__test_id'), 'not.valid.email');
    expect(mockSetValue).toHaveBeenCalledWith({
      isValid: false,
      value: 'not.valid.email',
    });
  });
});
