import React from 'react';
import { ResendEmail } from './ResendEmail';
import { action } from '@storybook/addon-actions';
import { Navigation } from '../../container';

export default {
  title: 'Components/ResendEmail',
  component: ResendEmail,
};

const defaultValues = {
  title: 'Resend Email',
  buttonTitle: 'RESEND',
  testId: 'test id',
  showError: false,
  onLoginClick: action('clicked in the onLoginClick'),
  onResetClick: action('clicked in the onResetClick'),
};

export const BasicUsage = (args: any) => <ResendEmail {...args} />;
BasicUsage.args = {
  ...defaultValues,
};
export const WithNavigation = (args: any) => (
  <Navigation>
    <ResendEmail {...args} />
  </Navigation>
);
WithNavigation.args = {
  ...defaultValues,
};
