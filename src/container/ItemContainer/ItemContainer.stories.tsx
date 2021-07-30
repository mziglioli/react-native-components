import React from 'react';
import { ItemContainer } from './ItemContainer';
import { buildListItems } from '../../utils/BuilderTest';

export default {
  title: 'Containers/ItemContainer',
  component: ItemContainer,
};

const defaultValues = {
  testId: 'Default title',
  items: buildListItems(),
};

export const BasicUsage = (args: any) => <ItemContainer {...args} />;
BasicUsage.args = {
  ...defaultValues,
};
