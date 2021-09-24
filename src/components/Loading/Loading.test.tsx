import React from 'react';
import { render } from '@testing-library/react-native';
import { Loading } from './Loading';

describe('<Loading>', () => {
  const renderComponent = (overrides = {}) =>
    render(<Loading testId="test_id" isLoading={true} {...overrides} />);

  it('should render the component with loading', () => {
    const { getByTestId } = renderComponent();
    expect(getByTestId('Loading__test_id__true')).toBeDefined();
  });

  it('should render the component without loading', () => {
    const { getByTestId } = renderComponent({ isLoading: false });
    expect(getByTestId('Loading__test_id__false')).toBeDefined();
  });
});
