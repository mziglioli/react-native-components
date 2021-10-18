import React from 'react';
import { List } from 'react-native-paper';
import type { DefaultProps } from '../../type';
import { Styles } from '../../utils';

export interface RatingProps extends DefaultProps {
  type: 'star' | 'star-half-full' | 'star-outline';
}

const Rating = ({ type }: RatingProps) => {
  return <List.Icon icon={type} color="#FFA000" style={Styles.rating} />;
};
export { Rating };
