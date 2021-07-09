import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { text } from '@storybook/addon-knobs';
import { Title } from '../../../src';

storiesOf('Title', module).add('Default', () => (
  <Title value={text('title value', 'This is a title')} />
));
