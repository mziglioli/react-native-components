import React from 'react';
import { render } from '@testing-library/react-native';
import { Select } from './Select';
import type { SelectItems } from '../../type';

export const options = [
  { value: '1', label: 'Brazil' },
  { value: '2', label: 'Italy' },
  { value: '3', label: 'Spain' },
  { value: '4', label: 'Greece' },
] as SelectItems;

describe('<Select>', () => {
  const mockCallback = jest.fn();

  const renderComponent = (overrides = {}) =>
    render(
      <Select
        title="select test"
        testId="test_id"
        onSelect={mockCallback}
        items={options}
        {...overrides}
      />
    );
  it('should render the component', () => {
    const { getByTestId } = renderComponent();
    expect(getByTestId('Select__Input__test_id')).toBeDefined();
  });
});
