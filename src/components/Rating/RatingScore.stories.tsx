import React from 'react';
import { RatingScore } from './RatingScore';

export default {
  title: 'Components/RatingScore',
  component: RatingScore,
};

const defaultValues = {
  isMobile: false,
  testId: 'test',
  score: 5,
};

export const BasicUsage = (args: any) => <RatingScore {...args} />;
BasicUsage.args = {
  ...defaultValues,
};
