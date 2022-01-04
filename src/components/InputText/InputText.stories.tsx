import React from 'react';
import { InputText } from './InputText';
import { InputTextEmail } from './InputTextEmail';
import { action } from '@storybook/addon-actions';
import { InputTextPassword } from './InputTextPassword';
import { InputTextNumber } from './InputTextNumber';

export default {
  title: 'Components/InputText',
  component: InputText,
};

const defaultValues = {
  testId: 'test id',
  validate: action('validation will be done here'),
  showError: false,
  errorMessage: 'error message',
  props: {
    label: 'Test',
    placeholder: 'Enter your test',
    accessible: true,
    accessibilityLabel: 'label',
    accessibilityHint: 'hint',
    accessibilityRole: 'text',
  },
  setValue: action('setValue will be done here'),
  value: '',
  isMobile: false,
};

export const BasicUsage = (args: any) => <InputText {...args} />;
BasicUsage.args = {
  ...defaultValues,
};
export const EmailUsage = (args: any) => <InputTextEmail {...args} />;
EmailUsage.args = {
  ...defaultValues,
};
export const PasswordUsage = (args: any) => <InputTextPassword {...args} />;
PasswordUsage.args = {
  ...defaultValues,
};
export const NumberUsage = (args: any) => <InputTextNumber {...args} />;
PasswordUsage.args = {
  ...defaultValues,
};
