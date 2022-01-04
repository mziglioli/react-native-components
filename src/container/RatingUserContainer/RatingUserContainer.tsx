import React from 'react';
import { ScrollView, View } from 'react-native';
import type { DefaultProps } from '../../type';
import { Styles } from '../../utils';
import type { RecommendationsUsers } from '../../type/recommendation';
import {
  ParagraphColored,
  RatingUser,
  TitleColored,
  FilterButtons,
  SearchButtons,
} from '../../components';

export interface RatingUserContainerProps extends DefaultProps {
  recommendations?: RecommendationsUsers;
  providerName: string;
  onlyFriendsClick: (onlyFriends: boolean) => void;
  onShowMoreClick: () => void;
}

const RatingUserContainer = ({
  recommendations,
  isMobile,
  providerName,
  onlyFriendsClick,
  onShowMoreClick,
}: RatingUserContainerProps) => {
  return (
    <View>
      <TitleColored type={'info'} content={'Recommendations'} />
      <View
        testID={`FilterButtons`}
        style={{
          ...Styles.page.view,
          flexDirection: 'row',
        }}
      >
        <ParagraphColored
          type={undefined}
          content={'Here are your friends recommendations for: '}
        />
        <ParagraphColored type={undefined} bold content={providerName} />
      </View>
      <FilterButtons isMobile={isMobile} onlyFriendsClick={onlyFriendsClick} />
      <ScrollView
        style={{ ...Styles.page.view, paddingTop: 10, paddingBottom: 10 }}
        testID={`RatingUserContainer`}
      >
        {recommendations && recommendations.length > 0 && (
          <View
            key={'RatingUserContainer__Recommendations'}
            testID="RatingUserContainer__Recommendations"
          >
            {recommendations.map((rec) => (
              <RatingUser
                key={`RatingUserContainer__Recommendations__${rec.id}`}
                title={rec.name}
                date={rec.date}
                score={rec.score}
                image={rec.avatar}
                testId={`RatingUserContainer__User__${rec.id}`}
                isMobile={isMobile}
              />
            ))}
          </View>
        )}
      </ScrollView>
      <SearchButtons
        onShowMore={onShowMoreClick}
        showMore={true}
        isMobile={isMobile}
      />
    </View>
  );
};
export { RatingUserContainer };
