import React from 'react';
import { render } from '@testing-library/react-native';
import { FilterButtons } from './FilterButtons';

describe('<FilterButtons>', () => {
  const mockOnlyFriendsClick = jest.fn();

  const renderComponent = (overrides = {}) =>
    render(
      <FilterButtons
        isMobile={false}
        onlyFriendsClick={mockOnlyFriendsClick}
        testId="test_id"
        {...overrides}
      />
    );

  it('should render the component', () => {
    const { getByTestId } = renderComponent();
    expect(getByTestId('FilterButtons__test_id')).toBeDefined();
  });
});
