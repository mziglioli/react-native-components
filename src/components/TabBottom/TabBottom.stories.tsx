import React from 'react';
import { TabBottom } from './TabBottom';
import { tabScenes, tabRoutes } from '../../utils/BuilderTest';
export default {
  title: 'Components/TabBottom',
  component: TabBottom,
};

const defaultValues = {
  scenes: tabScenes,
  tabRoutes: tabRoutes,
};

export const BasicUsage = (args: any) => <TabBottom {...args} />;
BasicUsage.args = {
  ...defaultValues,
};
