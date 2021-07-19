import React from 'react';
import { render } from '@testing-library/react-native';
import { SideBar } from './SideBar';
import { buildItems } from '../utils/Builder.test';

describe('<SideBar>', () => {
  const renderComponent = () => render(<SideBar items={buildItems()} />);

  it('should render the component', () => {
    const { getByTestId } = renderComponent();
    expect(getByTestId('SideBar__Drawer')).toBeDefined();
    expect(getByTestId('SideBar__Drawer_Item_0')).toBeDefined();
    expect(getByTestId('SideBar__Drawer_Item_1')).toBeDefined();
    expect(getByTestId('SideBar__Drawer_Item_2')).toBeDefined();
  });
});
