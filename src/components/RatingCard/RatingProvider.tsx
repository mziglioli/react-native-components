import React from 'react';
import { Paragraph, Button, Subheading } from 'react-native-paper';
import type { DefaultProps } from '../../type';
import { RatingScore } from '../Rating';
import { Styles } from '../../utils';
import { View } from 'react-native';
import { RatingCard } from './RatingCard';

export interface RatingProviderProps extends DefaultProps {
  providerId: string;
  title: string;
  subtitle?: string;
  description?: string;
  image?: string;
  score?: number;
  onViewDetailedPress: (id: string) => void;
}

const RatingProvider = ({
  testId,
  providerId,
  title,
  subtitle,
  description,
  image,
  score,
  onViewDetailedPress,
  isMobile,
}: RatingProviderProps) => {
  let viewScoreStyle = {};
  if (!isMobile) {
    viewScoreStyle = {
      alignItems: 'flex-start',
      marginLeft: -8,
    };
  }
  return (
    <RatingCard
      title={title}
      subtitle={subtitle}
      image={image}
      isMobile={isMobile}
      testId={testId}
    >
      <>
        {description && (
          <Paragraph testID={`RatingCard__Description__${testId}`}>
            {description}
          </Paragraph>
        )}
        <View
          testID={`RatingCard__AvgScore__${testId}`}
          style={{
            ...Styles.ratingCommentText,
            alignSelf: isMobile ? 'center' : 'start',
          }}
        >
          <Subheading>Avg score: </Subheading>
          <RatingScore score={score || 0} isMobile={isMobile} />
        </View>
        <Button
          testID={`RatingCard__ViewDetails__${testId}`}
          icon="eye"
          onPress={() => {
            console.log('onViewDetailedPress', providerId);
            onViewDetailedPress(providerId);
          }}
          uppercase={false}
          style={viewScoreStyle}
        >
          Score detailed
        </Button>
      </>
    </RatingCard>
  );
};
export { RatingProvider };
