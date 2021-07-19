import React from 'react';
import { render } from '@testing-library/react-native';
import { Header } from './Header';

describe('<Header>', () => {
  const mockMenuAction = jest.fn();
  const mockBackAction = jest.fn();

  const renderComponent = () =>
    render(
      <Header onBackAction={mockBackAction} onMenuAction={mockMenuAction} />
    );
  it('should render the component', () => {
    const { getByTestId } = renderComponent();
    expect(getByTestId('Header')).toBeDefined();
  });
});
