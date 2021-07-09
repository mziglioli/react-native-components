import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { text } from '@storybook/addon-knobs';
import { Button } from '../../../src';
import { action } from '@storybook/addon-actions';

storiesOf('Button', module).add('Default', () => (
  <Button
    value={text('title value', 'This is a title')}
    onClick={() => action('clicked in the button')}
  />
));
