import React from 'react';
import { RatingProvider } from './RatingProvider';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/RatingProvider',
  component: RatingProvider,
};

const defaultValues = {
  title: 'Default title',
  subtitle: 'subtitle',
  description: '',
  image: '',
  score: '',
  testId: 'test',
  providerId: 'providerId',
  onViewDetailedPress: action('onViewDetailedPress'),
  isMobile: false,
};

export const BasicUsage = (args: any) => <RatingProvider {...args} />;
BasicUsage.args = {
  ...defaultValues,
};
