import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { InputTextNumber } from './InputTextNumber';

describe('<InputTextNumber>', () => {
  const mockSetValue = jest.fn();

  const renderComponent = (overrides = {}) =>
    render(
      <InputTextNumber
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

  it('should change value and call back setValue when valid number', () => {
    const { getByTestId } = renderComponent();
    fireEvent.changeText(getByTestId('InputText__test_id'), '1000');
    expect(mockSetValue).toHaveBeenCalledWith({
      isValid: true,
      value: '1000',
    });
  });
  it('should change value and call back setValue when invalid number', () => {
    const { getByTestId } = renderComponent();
    fireEvent.changeText(getByTestId('InputText__test_id'), 'not.valid22');
    expect(mockSetValue).toHaveBeenCalledWith({
      isValid: false,
      value: 'not.valid22',
    });
  });
});
