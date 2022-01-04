import React from 'react';
import { List } from 'react-native-paper';
import type { DefaultProps } from '../../type';
import { Styles } from '../../utils';

export interface RatingProps extends DefaultProps {
  type: 'star' | 'star-half-full' | 'star-outline';
  selected?: boolean;
}

const Rating = ({ type, selected }: RatingProps) => {
  return (
    <List.Icon
      icon={type}
      color={selected ? Styles.ratingColor : Styles.ratingColorNotSelected}
      style={Styles.rating}
    />
  );
};
export { Rating };
