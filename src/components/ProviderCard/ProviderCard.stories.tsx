import React from 'react';
import { ProviderCard } from './ProviderCard';

export default {
  title: 'Components/ProviderCard',
  component: ProviderCard,
};

const defaultValues = {
  title: 'Default title',
  subtitle: 'subtitle',
  description: '',
  image: '',
  score: '',
  testId: 'test',
};

export const BasicUsage = (args: any) => <ProviderCard {...args} />;
BasicUsage.args = {
  ...defaultValues,
};
