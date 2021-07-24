import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { AppBarHeader } from '../src';
import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';

export default {
  title: 'AppBar',
};

export const AppBar = () => (
  <AppBarHeader
    title={text('title', 'my title')}
    showBackButton={boolean('showBackButton', false)}
    onBackAction={action('clicked in the button')}
    onMenuAction={action('clicked in the button')}
  />
);

// On-Device Register
storiesOf('AppBar', module).add('default', AppBar);
