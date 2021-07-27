import React from 'react';
import { AppBarHeader } from './AppBarHeader';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/AppBar',
  component: AppBarHeader,
};

const defaultValues = {
  title: 'Default title',
  showBackButton: false,
  onBackAction: action('clicked in the button'),
  onMenuAction: action('clicked in the button'),
};

export const BasicUsage = (args: any) => <AppBarHeader {...args} />;
BasicUsage.args = {
  ...defaultValues,
};

export const WithBackButtonUsage = (args: any) => <AppBarHeader {...args} />;

WithBackButtonUsage.args = {
  ...defaultValues,
  showBackButton: true,
};
