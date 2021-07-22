import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { SideBar, buildItems } from '../../../src';

storiesOf('SideBar', module).add('Default', () => (
  <SideBar items={buildItems()} navigation={{}} title="test" />
));
