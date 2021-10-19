import React from 'react';
import { render } from '@testing-library/react-native';
import { ProviderCard } from './ProviderCard';

describe('<ProviderCard>', () => {
  const renderComponent = (overrides = {}) =>
    render(
      <ProviderCard
        title={'test'}
        subtitle={'subtitle'}
        testId="test_id"
        score={3}
        {...overrides}
      />
    );

  it('should render the component', () => {
    const { getByTestId } = renderComponent();
    expect(getByTestId('ProviderCard__test_id')).toBeDefined();
  });

  it('should render the component with decimals', () => {
    const { getByTestId, queryByTestId } = renderComponent({ score: 3.5 });
    expect(getByTestId('ProviderCard__test_id')).toBeDefined();
    expect(
      queryByTestId('ProviderCard__Description__test_id')
    ).not.toBeInTheDocument();
  });
  it('should render the component with description', () => {
    const { getByTestId } = renderComponent({
      description: 'description',
    });
    expect(getByTestId('ProviderCard__test_id')).toBeDefined();
    expect(getByTestId('ProviderCard__Description__test_id')).toBeDefined();
  });
});
