import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { ItemContainer } from './ItemContainer';
import { buildListItems } from '../../utils/BuilderTest';

describe('<ItemContainer>', () => {
  const mockOnItemClick = jest.fn();

  const renderComponent = (overrides = {}) =>
    render(
      <ItemContainer
        testId="test_id"
        items={buildListItems()}
        onItemClick={mockOnItemClick}
        {...overrides}
      />
    );
  it('should render the component', () => {
    const { getByTestId } = renderComponent();
    expect(getByTestId('ItemContainer__View__test_id')).toBeDefined();
    expect(getByTestId('Item__test_id__0')).toBeDefined();
    expect(getByTestId('Item__test_id__1')).toBeDefined();
    expect(getByTestId('Item__test_id__2')).toBeDefined();
    expect(getByTestId('Item__test_id__3')).toBeDefined();
    expect(getByTestId('Item__test_id__4')).toBeDefined();
    expect(getByTestId('Item__test_id__5')).toBeDefined();
  });
  it('should render the component with error', () => {
    const { getByTestId } = renderComponent();
    fireEvent.press(getByTestId('Item__Icon__test_id__1'));
    expect(mockOnItemClick).toHaveBeenCalledWith({
      description: '2 description',
      id: '2',
      title: '2 title',
      type: 'success',
    });
  });
});
