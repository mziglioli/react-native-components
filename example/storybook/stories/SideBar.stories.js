import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { SideBar } from '../../../src';
import { buildItems } from '../../../src/components/utils/Builder.test';

storiesOf('SideBar', module).add('Default', () => (
  <SideBar items={buildItems()} navigation={{}} />
));
