import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { TabBottom, tabScenes, tabRoutes } from '../../../src';

storiesOf('TabBottom', module).add('Default', () => (
  <TabBottom scenes={tabScenes} tabRoutes={tabRoutes} />
));
