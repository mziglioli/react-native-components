import React from 'react';
import { render } from '@testing-library/react-native';
import { Notification } from './Notification';
import { View } from 'react-native';

describe('<Notification>', () => {
  const renderComponent = (overrides = {}) =>
    render(
      <Notification
        testId="test_id"
        title="title"
        type="info"
        subtitle="subtitle"
        {...overrides}
      />
    );
  it('should render the component', () => {
    const { getByTestId } = renderComponent();
    expect(getByTestId('Notification__Card__test_id')).toBeDefined();
  });
  it('should render the component with children', () => {
    const { getByTestId } = renderComponent({ children: <View>test</View> });
    expect(getByTestId('Notification__Card__test_id')).toBeDefined();
  });
});
