import React from 'react';
import { render } from '@testing-library/react-native';
import { AppBarHeader } from './AppBarHeader';

describe('<Header>', () => {
  const mockMenuAction = jest.fn();
  const mockBackAction = jest.fn();

  const renderComponent = (overrides = {}) =>
    render(
      <AppBarHeader
        title="test"
        showBackButton={true}
        onBackAction={mockBackAction}
        onMenuAction={mockMenuAction}
        {...overrides}
      />
    );
  it('should render the component', () => {
    const { getByTestId } = renderComponent();
    expect(getByTestId('AppBarHeader')).toBeDefined();
    expect(getByTestId('AppBarHeader__BackAction')).toBeDefined();
    expect(getByTestId('AppBarHeader__Content')).toBeDefined();
    expect(getByTestId('AppBarHeader__Action')).toBeDefined();
  });

  it('should render the component without back link', () => {
    const { getByTestId, queryByTestId } = renderComponent({
      showBackButton: false,
    });
    expect(getByTestId('AppBarHeader')).toBeDefined();
    expect(queryByTestId('AppBarHeader__BackAction')).toBeNull();
    expect(getByTestId('AppBarHeader__Content')).toBeDefined();
    expect(getByTestId('AppBarHeader__Action')).toBeDefined();
  });
});
