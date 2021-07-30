import React from 'react';
import { View, ScrollView } from 'react-native';
import type { DefaultProps } from '../../type';

export interface PageProps extends DefaultProps {
  page: string;
  title: string;
}

const Page = ({ testId, children }: PageProps) => (
  <View testID={`Page__Header__${testId}`}>
    <ScrollView testID={`Page__Content__${testId}`}>{children}</ScrollView>
  </View>
);
export { Page };
