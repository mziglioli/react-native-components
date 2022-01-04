import React from 'react';
import { render } from '@testing-library/react-native';
import { RatingUser } from './RatingUser';

describe('<RatingUser>', () => {
  const renderComponent = (overrides = {}) =>
    render(
      <RatingUser
        title={'test'}
        testId="test_id"
        score={3}
        isMobile={false}
        date="10 Oct 2021"
        {...overrides}
      />
    );

  it('should render the component', () => {
    const { getByTestId } = renderComponent();
    expect(getByTestId('RatingCard__Score__test_id')).toBeDefined();
    expect(getByTestId('RatingCard__Date__test_id')).toBeDefined();
    expect(getByTestId('RatingCard__Comments__test_id')).toBeDefined();
  });

  it('should render the component when overrides', () => {
    const { getByTestId } = renderComponent({
      score: undefined,
      comments: 'test',
      isMobile: true,
    });
    expect(getByTestId('RatingCard__Score__test_id')).toBeDefined();
    expect(getByTestId('RatingCard__Date__test_id')).toBeDefined();
    expect(getByTestId('RatingCard__Comments__test_id')).toBeDefined();
  });
});
