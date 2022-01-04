import React from 'react';
import { RatingClickable } from './RatingClickable';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/RatingClickable',
  component: RatingClickable,
};

const defaultValues = {
  score: 5,
  isMobile: false,
  testId: 'test',
  onSelection: action('onSelection'),
};

export const BasicUsage = (args: any) => <RatingClickable {...args} />;
BasicUsage.args = {
  ...defaultValues,
};
