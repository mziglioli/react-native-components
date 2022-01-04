import React from 'react';
import { QuestionImmigrationContainer } from './QuestionImmigrationContainer';

export default {
  title: 'Containers/QuestionImmigrationContainer',
  component: QuestionImmigrationContainer,
};

const defaultValues = {
  testId: 'Default title',
  isMobile: false,
  countries: [
    { value: '1', label: 'Brazil' },
    { value: '2', label: 'Italy' },
    { value: '3', label: 'Spain' },
    { value: '4', label: 'Greece' },
  ],
  cities: [
    { value: '1', label: 'Rio de Janeiro' },
    { value: '2', label: 'Medianeira' },
    { value: '3', label: 'Cascavel' },
  ],
  homeTypes: [
    { value: '1', label: 'House' },
    { value: '2', label: 'Farm' },
    { value: '3', label: 'flat' },
  ],
};

export const BasicUsage = (args: any) => (
  <QuestionImmigrationContainer {...args} />
);
BasicUsage.args = {
  ...defaultValues,
};
