import React from 'react';
import { Text } from 'react-native';

interface TitleProps {
  value: string;
}

const Title = ({ value }: TitleProps) => <Text>{value}</Text>;

export { Title };
