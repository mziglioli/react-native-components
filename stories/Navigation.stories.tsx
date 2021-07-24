import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { Navigation } from '../src';

export default {
  title: 'Navigation',
};
export const NavigationDefault = () => <Navigation />;
storiesOf('Navigation', module).add('Default', NavigationDefault);
