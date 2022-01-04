import React from 'react';
import { Rating } from './Rating';

export default {
  title: 'Components/Rating',
  component: Rating,
};

const defaultValues = {
  type: 'star',
  selected: false,
  isMobile: true,
};

export const BasicUsage = (args: any) => <Rating {...args} />;
BasicUsage.args = {
  ...defaultValues,
};
