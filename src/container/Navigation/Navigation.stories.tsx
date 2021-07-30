import React from 'react';
import { Navigation } from './Navigation';

export default {
  title: 'Components/Navigation',
  component: Navigation,
};

const defaultValues = {};

export const BasicUsage = (args: any) => <Navigation {...args} />;
BasicUsage.args = {
  ...defaultValues,
};
