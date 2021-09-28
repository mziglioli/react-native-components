import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { InputTextSecret } from './InputTextSecret';

describe('<InputTextSecret>', () => {
  const mockSetValue = jest.fn();

  const renderComponent = (overrides = {}) =>
    render(
      <InputTextSecret
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

  it('should change value and call back setValue when valid secret', () => {
    const { getByTestId } = renderComponent();
    fireEvent.changeText(getByTestId('InputText__test_id'), '1234');
    expect(mockSetValue).toHaveBeenCalledWith({
      isValid: true,
      value: '1234',
    });
  });
  it('should change value and call back setValue when invalid secret', () => {
    const { getByTestId } = renderComponent();
    fireEvent.changeText(getByTestId('InputText__test_id'), '123');
    expect(mockSetValue).toHaveBeenCalledWith({
      isValid: false,
      value: '123',
    });
    fireEvent.changeText(getByTestId('InputText__test_id'), 'a123');
    expect(mockSetValue).toHaveBeenCalledWith({
      isValid: false,
      value: 'a123',
    });
    fireEvent.changeText(getByTestId('InputText__test_id'), 'a123456789789');
    expect(mockSetValue).toHaveBeenCalledWith({
      isValid: false,
      value: 'a123',
    });
  });
});
