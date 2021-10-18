import React from 'react';
import { render } from '@testing-library/react-native';
import { RatingScore } from './RatingScore';

describe('<RatingScore>', () => {
  const renderComponent = (overrides = {}) =>
    render(<RatingScore testId="test_id" score={3} {...overrides} />);

  it('should render the component', () => {
    const { getByTestId } = renderComponent();
    expect(getByTestId('RatingScore__test_id')).toBeDefined();
  });
});
