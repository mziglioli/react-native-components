import React from 'react';
import { FilterButtons } from './FilterButtons';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/FilterButtons',
  component: FilterButtons,
};

const defaultValues = {
  testId: 'test id',
  onlyFriendsClick: action('clicked in the onlyFriendsClick'),
};

export const BasicUsage = (args: any) => <FilterButtons {...args} />;
BasicUsage.args = {
  ...defaultValues,
};
