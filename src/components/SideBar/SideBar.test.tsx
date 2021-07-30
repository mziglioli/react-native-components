import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { SideBar } from './SideBar';
import { buildMenuItems } from '../../utils/BuilderTest';

describe('<SideBar>', () => {
  const mockCallback = jest.fn();

  const renderComponent = () =>
    render(
      <SideBar
        itemPress={mockCallback}
        currentPage={'Contact'}
        customer={{ name: 'Marcelo Ziglioli', initials: 'MZ' }}
        items={buildMenuItems()}
      />
    );

  it('should render the component', () => {
    const { getByTestId } = renderComponent();
    expect(getByTestId('SideBar__Drawer')).toBeDefined();
    expect(getByTestId('SideBar__Drawer_Item_0')).toBeDefined();
    expect(getByTestId('SideBar__Drawer_Item_1')).toBeDefined();
    expect(getByTestId('SideBar__Drawer_Item_2')).toBeDefined();
  });

  it('should send call back event account item is clicked', async () => {
    const { getByTestId } = renderComponent();
    await fireEvent.press(getByTestId('SideBar__Drawer_Item_0'));
    expect(mockCallback).toHaveBeenCalledWith({
      active: false,
      icon: 'account',
      label: 'Account',
      page: 'Account',
    });
  });
  it('should send call back event when help item is clicked', async () => {
    const { getByTestId } = renderComponent();
    await fireEvent.press(getByTestId('SideBar__Drawer_Item_1'));
    expect(mockCallback).toHaveBeenCalledWith({
      active: false,
      icon: 'help-circle',
      label: 'Help',
      page: 'Help',
    });
  });
  it('should send call back event when contact item is clicked', async () => {
    const { getByTestId } = renderComponent();
    await fireEvent.press(getByTestId('SideBar__Drawer_Item_2'));
    expect(mockCallback).toHaveBeenCalledWith({
      active: false,
      icon: 'card-account-phone',
      label: 'Contact',
      page: 'Contact',
    });
  });
});
