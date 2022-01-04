import React from 'react';
import { RatingUserContainer } from './RatingUserContainer';
import { buildRecommendationsUsers } from '../../utils/BuilderTest';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Containers/RatingUserContainer',
  component: RatingUserContainer,
};

const defaultValues = {
  testId: 'Default title',
  recommendations: undefined,
  isMobile: false,
  providerName: 'Test Provider Name',
  onlyFriendsClick: action('onlyFriendsClick'),
  onShowMoreClick: action('onShowMoreClick'),
};

export const BasicUsage = (args: any) => <RatingUserContainer {...args} />;
BasicUsage.args = {
  ...defaultValues,
  recommendations: buildRecommendationsUsers(),
};

export const EmptyBasicUsage = (args: any) => <RatingUserContainer {...args} />;
EmptyBasicUsage.args = {
  ...defaultValues,
};
