import React from 'react';
import { Select } from './Select';
import { action } from '@storybook/addon-actions';
import type { SelectItems } from 'react-native-components';
const options = [
  { value: '1', label: 'Brazil' },
  { value: '2', label: 'Italy' },
  { value: '3', label: 'Spain' },
  { value: '4', label: 'Greece' },
] as SelectItems;

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
