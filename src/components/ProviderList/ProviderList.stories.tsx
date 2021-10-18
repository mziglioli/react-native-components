import React from 'react';
import { ProviderList } from './ProviderList';

export default {
  title: 'Components/ProviderList',
  component: ProviderList,
};

const defaultValues = {
  title: 'Default title',
  subtitle: 'subtitle',
  description: '',
  image: '',
  score: '',
  testId: 'test',
};

export const BasicUsage = (args: any) => <ProviderList {...args} />;
BasicUsage.args = {
  ...defaultValues,
};
