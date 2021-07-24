import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { SideBar, buildItems } from '../src';
import { action, ActionOptions } from '@storybook/addon-actions';

export default {
  title: 'SideBar',
};
export const SideBarDefault = () => (
  <SideBar
    items={buildItems()}
    navigation={{
      navigate: (value: ActionOptions | undefined) => {
        console.log('navigate to', value);
        action('navigate to', value);
      },
    }}
    title="test"
  />
);
storiesOf('SideBar', module).add('Default', SideBarDefault);
