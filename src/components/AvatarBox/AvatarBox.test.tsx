import React from 'react';
import { render } from '@testing-library/react-native';
import { AvatarBox } from './AvatarBox';

describe('<AvatarBox>', () => {
  const renderComponent = (overrides = {}) =>
    render(<AvatarBox testId="test_id" {...overrides} />);

  it('should render the component with icon missing image', () => {
    const { getByTestId } = renderComponent();
    expect(getByTestId('AvatarBox__Icon__test_id')).toBeDefined();
  });
  it('should render the component with image', () => {
    const { getByTestId } = renderComponent({ image: 'test.com' });
    expect(getByTestId('AvatarBox__Image__test_id')).toBeDefined();
  });
});
