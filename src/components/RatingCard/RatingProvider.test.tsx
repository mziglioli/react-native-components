import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { RatingProvider } from './RatingProvider';

describe('<RatingProvider>', () => {
  const mockOnViewDetailedPress = jest.fn();
  const renderComponent = (overrides = {}) =>
    render(
      <RatingProvider
        title={'test'}
        subtitle={'subtitle'}
        testId="test_id"
        score={3}
        onViewDetailedPress={mockOnViewDetailedPress}
        isMobile={false}
        providerId={'1_provider'}
        {...overrides}
      />
    );

  it('should render the component', () => {
    const { getByTestId } = renderComponent();
    expect(getByTestId('RatingCard__AvgScore__test_id')).toBeDefined();
  });

  it('should render the component when mobile', () => {
    const { getByTestId } = renderComponent({
      isMobile: true,
      score: undefined,
    });
    expect(getByTestId('RatingCard__AvgScore__test_id')).toBeDefined();
  });

  it('should render the component with decimals', () => {
    const { getByTestId, queryByTestId } = renderComponent({ score: 3.5 });
    expect(getByTestId('RatingCard__test_id')).toBeDefined();
    expect(
      queryByTestId('RatingCard__Description__test_id')
    ).not.toBeInTheDocument();
  });
  it('should render the component with description', () => {
    const { getByTestId } = renderComponent({
      description: 'description',
    });
    expect(getByTestId('RatingCard__test_id')).toBeDefined();
    expect(getByTestId('RatingCard__Description__test_id')).toBeDefined();
  });
  it('should call the function on button click', () => {
    const { getByTestId } = renderComponent();
    const btn = getByTestId('RatingCard__ViewDetails__test_id');
    expect(btn).toBeDefined();
    fireEvent.press(btn);
    expect(mockOnViewDetailedPress).toBeCalledWith('1_provider');
  });
});
