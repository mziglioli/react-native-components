import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { InputTextName } from './InputTextName';

describe('<InputTextName>', () => {
  const mockSetValue = jest.fn();

  const renderComponent = (overrides = {}) =>
    render(
      <InputTextName
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

  it('should change value and call back setValue when valid name', () => {
    const { getByTestId } = renderComponent();
    fireEvent.changeText(getByTestId('InputText__test_id'), 'Valid Name');
    expect(mockSetValue).toHaveBeenCalledWith({
      isValid: true,
      value: 'Valid Name',
    });
  });
  it('should change value and call back setValue when invalid name', () => {
    const { getByTestId } = renderComponent();
    fireEvent.changeText(getByTestId('InputText__test_id'), 'not.valid22');
    expect(mockSetValue).toHaveBeenCalledWith({
      isValid: false,
      value: 'not.valid22',
    });
  });
});
