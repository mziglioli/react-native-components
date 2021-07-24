import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { TabBottom, tabScenes, tabRoutes } from '../src';

export default {
  title: 'TabBottom',
};
export const TabBottomDefault = () => (
  <TabBottom scenes={tabScenes} tabRoutes={tabRoutes} />
);
storiesOf('TabBottom', module).add('Default', TabBottomDefault);
