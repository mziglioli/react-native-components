import React from 'react';
import { Paragraph, Subheading } from 'react-native-paper';
import type { DefaultProps } from '../../type';
import { RatingScore } from '../Rating';
import { Styles } from '../../utils';
import { View } from 'react-native';
import { RatingCard } from './RatingCard';

export interface RatingUserProps extends DefaultProps {
  title: string;
  image?: string;
  score?: number;
  date: string;
  comments?: string;
}

const RatingUser = ({
  testId,
  title,
  comments,
  image,
  score,
  date,
  isMobile,
}: RatingUserProps) => {
  return (
    <RatingCard title={title} image={image} isMobile={isMobile} testId={testId}>
      <View>
        <View
          style={Styles.ratingCommentText}
          testID={`RatingCard__Score__${testId}`}
        >
          <Subheading>Score: </Subheading>
          <RatingScore score={score || 0} isMobile={isMobile} />
        </View>
        <View
          style={Styles.ratingCommentText}
          testID={`RatingCard__Date__${testId}`}
        >
          <Subheading>Date: </Subheading>
          <Paragraph>{date}</Paragraph>
        </View>
        <View
          style={Styles.ratingCommentText}
          testID={`RatingCard__Comments__${testId}`}
        >
          <Subheading>Comments: </Subheading>
          <Paragraph>{comments || 'N/A'}</Paragraph>
        </View>
      </View>
    </RatingCard>
  );
};
export { RatingUser };
