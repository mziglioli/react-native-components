import React from 'react';
import { SideBar } from './SideBar';
import { action } from '@storybook/addon-actions';
import { buildMenuItems } from '../../utils/BuilderTest';
import type { MenuItem } from '../../type';

export default {
  title: 'Components/SideBar',
  component: SideBar,
};

const defaultValues = {
  items: buildMenuItems(),
  itemPress: (item: MenuItem) => {
    console.log('itemPress', item);
    action('navigate to');
  },
  currentPage: 'Contact',
  customer: { name: 'Marcelo Ziglioli', initials: 'MZ' },
};

export const BasicUsage = (args: any) => <SideBar {...args} />;
BasicUsage.args = {
  ...defaultValues,
};
