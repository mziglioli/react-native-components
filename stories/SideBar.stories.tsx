import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { SideBar, buildItems } from '../src';
import { action } from '@storybook/addon-actions';

export default {
  title: 'SideBar',
};
export const SideBarDefault = (overrides: any) => (
  <SideBar
    items={buildItems()}
    itemPress={(item) => {
      console.log('itemPress', item);
      action('navigate to');
    }}
    currentPage={'Contact'}
    customer={{ name: 'Marcelo Ziglioli', initials: 'MZ' }}
    {...overrides}
  />
);
storiesOf('SideBar', module).add('Default', SideBarDefault);
