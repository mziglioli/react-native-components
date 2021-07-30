import React from 'react';
import { Item } from './Item';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/Item',
  component: Item,
};

const defaultValues = {
  title: 'Default title',
  description: 'item description',
  icon: 'folder',
  onClick: action('clicked in the button'),
  type: 'success',
};

export const BasicUsage = (args: any) => <Item {...args} />;
BasicUsage.args = {
  ...defaultValues,
};

export const WarnTypeUsage = (args: any) => <Item {...args} />;
WarnTypeUsage.args = {
  ...defaultValues,
  type: 'warn',
};
export const ErrorTypeUsage = (args: any) => <Item {...args} />;
ErrorTypeUsage.args = {
  ...defaultValues,
  type: 'error',
};
export const InfoTypeUsage = (args: any) => <Item {...args} />;
InfoTypeUsage.args = {
  ...defaultValues,
  type: 'info',
};
