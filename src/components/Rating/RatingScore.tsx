import React from 'react';
import type { DefaultProps } from '../../type';
import { Rating } from './Rating';
import { getHalf, getMarked, getUnMarked } from '../../utils/RatingUtils';
import { View } from 'react-native';
import { Styles } from '../../utils';

export interface RatingScoreProps extends DefaultProps {
  score: number;
}

const RatingScore = ({ testId, score }: RatingScoreProps) => {
  const marked = getMarked(score);
  const half = getHalf(score);
  const unMarked = getUnMarked(score);

  return (
    // @ts-ignore
    <View testID={`RatingScore__${testId}`} style={Styles.score}>
      {marked > 0 &&
        Array.from({ length: marked }, (x, i) => (
          <Rating key={`RatingScore__Marked__${x}__${i}`} type={'star'} />
        ))}
      {half > 0 &&
        Array.from({ length: half }, (x, i) => (
          <Rating
            key={`RatingScore__Half__${x}__${i}`}
            type={'star-half-full'}
          />
        ))}
      {unMarked > 0 &&
        Array.from({ length: unMarked }, (x, i) => (
          <Rating
            key={`RatingScore__UnMarked__${x}__${i}`}
            type={'star-outline'}
          />
        ))}
    </View>
  );
};
export { RatingScore };
