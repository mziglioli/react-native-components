import React from 'react';
import { Loading } from './Loading';
import { Navigation } from '../../container';

export default {
  title: 'Components/Loading',
  component: Loading,
};

const defaultValues = {
  testId: 'testId',
  isLoading: true,
};

export const BasicUsage = (args: any) => <Loading {...args} />;
BasicUsage.args = {
  ...defaultValues,
};

export const NotLoadingUsage = (args: any) => <Loading {...args} />;
NotLoadingUsage.args = {
  ...defaultValues,
  isLoading: false,
};

export const WithNavigation = (args: any) => (
  <Navigation>
    <Loading {...args} />
  </Navigation>
);
WithNavigation.args = {
  ...defaultValues,
};
