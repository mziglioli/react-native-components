import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { SideBar, buildItems } from '../../../src';
import { action } from '@storybook/addon-actions';

storiesOf('SideBar', module).add('Default', () => (
  <SideBar
    items={buildItems()}
    navigation={{
      navigate: (value) => {
        console.log('navigate to', value);
        action('navigate to', value);
      },
    }}
    title="test"
  />
));
