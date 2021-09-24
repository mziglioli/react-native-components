import React from 'react';
import type { DefaultProps } from '../../type';
import { ActivityIndicator, View } from 'react-native';

export interface LoadingProps extends DefaultProps {
  isLoading: boolean;
}

const Loading = ({ testId, isLoading }: LoadingProps) => (
  <View testID={`Loading__${testId}__${isLoading}`}>
    {isLoading && <ActivityIndicator size="large" />}
  </View>
);

export { Loading };
