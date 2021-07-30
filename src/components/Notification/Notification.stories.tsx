import React from 'react';
import { Notification } from './Notification';
import { View } from 'react-native';

export default {
  title: 'Components/Notification',
  component: Notification,
};

const defaultValues = {
  title: 'Default title',
  subtitle: 'subtitle',
};

export const BasicUsage = (args: any) => <Notification {...args} />;
BasicUsage.args = {
  ...defaultValues,
};
export const WithoutSubtitleUsage = (args: any) => <Notification {...args} />;
WithoutSubtitleUsage.args = {
  ...defaultValues,
  subtitle: undefined,
};
export const InfoUsage = (args: any) => <Notification {...args} />;
InfoUsage.args = {
  ...defaultValues,
  type: 'info',
};
export const WarnUsage = (args: any) => <Notification {...args} />;
WarnUsage.args = {
  ...defaultValues,
  type: 'warn',
};
export const ErrorUsage = (args: any) => <Notification {...args} />;
ErrorUsage.args = {
  ...defaultValues,
  type: 'error',
};
export const WithChildrenUsage = (args: any) => <Notification {...args} />;
WithChildrenUsage.args = {
  ...defaultValues,
  children: <View>test</View>,
};
