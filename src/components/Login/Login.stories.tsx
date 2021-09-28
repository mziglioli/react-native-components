import React from 'react';
import { Login } from './Login';
import { action } from '@storybook/addon-actions';
import { Navigation } from '../../container';

export default {
  title: 'Components/Login',
  component: Login,
};

const defaultValues = {
  testId: 'test id',
  showError: false,
  withSecret: false,
  onLoginClick: action('clicked in the onLoginClick'),
  onSignUpClick: action('clicked in the onSignUpClick'),
  onForgotPasswordClick: action('clicked in the onForgotPasswordClick'),
};

export const BasicUsage = (args: any) => <Login {...args} />;
BasicUsage.args = {
  ...defaultValues,
};

export const WithNavigation = (args: any) => (
  <Navigation>
    <Login {...args} />
  </Navigation>
);
WithNavigation.args = {
  ...defaultValues,
};
