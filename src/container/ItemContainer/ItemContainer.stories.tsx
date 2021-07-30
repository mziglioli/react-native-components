import React from 'react';
import { ItemContainer } from './ItemContainer';
import { buildListItems } from '../../utils/BuilderTest';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Containers/ItemContainer',
  component: ItemContainer,
};

const defaultValues = {
  testId: 'Default title',
  items: buildListItems(),
  onItemClick: action('item clicked'),
};

export const BasicUsage = (args: any) => <ItemContainer {...args} />;
BasicUsage.args = {
  ...defaultValues,
};
