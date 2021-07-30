import React from 'react';
import { Select } from './Select';
import { action } from '@storybook/addon-actions';
import { options } from './Select.test';

export default {
  title: 'Components/Select',
  component: Select,
};

const defaultValues = {
  title: 'Please select an item',
  items: options,
  onSelect: action('selected'),
};

export const BasicUsage = (args: any) => <Select {...args} />;
BasicUsage.args = {
  ...defaultValues,
};
