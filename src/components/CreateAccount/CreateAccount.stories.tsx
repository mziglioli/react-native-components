import React from 'react';
import { CreateAccount } from './CreateAccount';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/CreateAccount',
  component: CreateAccount,
};

const defaultValues = {
  testId: 'test id',
  showError: false,
  onLoginClick: action('clicked in the onLoginClick'),
  onSignUpClick: action('clicked in the onSignUpClick'),
};

export const BasicUsage = (args: any) => <CreateAccount {...args} />;
BasicUsage.args = {
  ...defaultValues,
};
