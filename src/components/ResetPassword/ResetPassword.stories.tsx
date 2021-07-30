import React from 'react';
import { ResetPassword } from './ResetPassword';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/ResetPassword',
  component: ResetPassword,
};

const defaultValues = {
  testId: 'test id',
  showError: false,
  onLoginClick: action('clicked in the onLoginClick'),
  onResetClick: action('clicked in the onResetClick'),
};

export const BasicUsage = (args: any) => <ResetPassword {...args} />;
BasicUsage.args = {
  ...defaultValues,
};
