import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { Item } from './Item';

describe('<Item>', () => {
  const mockOnClick = jest.fn();

  const renderComponent = (overrides = {}) =>
    render(
      <Item
        testId="test_id"
        title="title"
        type="info"
        description="description"
        onClick={mockOnClick}
        {...overrides}
      />
    );
  it('should render the component', () => {
    const { getByTestId } = renderComponent();
    expect(getByTestId('Item__test_id')).toBeDefined();
  });
  it('should call back onClick on item click', () => {
    const { getByTestId } = renderComponent();
    fireEvent.press(getByTestId('Item__Icon__test_id'));
    expect(mockOnClick).toHaveBeenCalled();
  });
});
