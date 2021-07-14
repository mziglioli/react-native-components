import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { Header } from '../../../src';
import { action } from '@storybook/addon-actions';

storiesOf('Header', module).add('Default', () => (
  <Header
    onBackAction={action('clicked in the button')}
    onMenuAction={action('clicked in the button')}
  />
));
