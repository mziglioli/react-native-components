import React, { useState } from 'react';
import type { DefaultProps } from '../../type';
import { TouchableOpacity, View } from 'react-native';
import { Rating } from './Rating';
import { Styles } from '../../utils';

export interface RatingClickableProps extends DefaultProps {
  type?: 'star' | 'star-half-full' | 'star-outline';
  onSelection: (score: number) => void;
}

const RatingClickable = ({
  isMobile,
  testId,
  onSelection,
}: RatingClickableProps) => {
  const [score, setScore] = useState<number>(0);

  const modifyScore = (value: number): void => {
    setScore(value);
    onSelection(value);
  };

  return (
    <View
      testID={`RatingScore__${testId}`}
      style={{ ...Styles.score, justifyContent: isMobile ? 'center' : 'left' }}
    >
      <TouchableOpacity onPress={() => modifyScore(1)}>
        <Rating
          key={`RatingVote__0`}
          type={score > 0 ? 'star' : 'star-outline'}
          selected={score > 0}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => modifyScore(2)}>
        <Rating
          key={`RatingVote__0`}
          type={score > 1 ? 'star' : 'star-outline'}
          selected={score > 1}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => modifyScore(3)}>
        <Rating
          key={`RatingVote__0`}
          type={score > 2 ? 'star' : 'star-outline'}
          selected={score > 2}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => modifyScore(4)}>
        <Rating
          key={`RatingVote__0`}
          type={score > 3 ? 'star' : 'star-outline'}
          selected={score > 3}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => modifyScore(5)}>
        <Rating
          key={`RatingVote__0`}
          type={score > 4 ? 'star' : 'star-outline'}
          selected={score > 4}
        />
      </TouchableOpacity>
    </View>
  );
};
export { RatingClickable };
