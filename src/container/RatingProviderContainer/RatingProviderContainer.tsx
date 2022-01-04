import React from 'react';
import { ScrollView, View } from 'react-native';
import type { DefaultProps } from '../../type';
import { Styles } from '../../utils';
import type { RecommendationsProviders } from '../../type/recommendation';
import {
  ParagraphColored,
  RatingProvider,
  TitleColored,
  FilterButtons,
  SearchButtons,
} from '../../components';

interface RatingProviderContainerProps extends DefaultProps {
  recommendations?: RecommendationsProviders;
  providerName: string;
  onlyFriendsClick: (onlyFriends: boolean) => void;
  onShowMoreClick: () => void;
  onViewDetailedPress: (id: string) => void;
}

const RatingProviderContainer = ({
  recommendations,
  isMobile,
  onlyFriendsClick,
  onShowMoreClick,
  onViewDetailedPress,
}: RatingProviderContainerProps) => {
  return (
    <View>
      <TitleColored type={'info'} content={'Providers'} />
      <ParagraphColored
        type={undefined}
        content={'Here are your the providers recommended by your friends'}
      />
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
              <RatingProvider
                key={`RatingUserContainer__Recommendations__${rec.id}`}
                title={rec.name}
                score={rec.score}
                image={rec.avatar}
                testId={`RatingUserContainer__User__${rec.id}`}
                isMobile={isMobile}
                providerId={rec.id}
                onViewDetailedPress={onViewDetailedPress}
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
export { RatingProviderContainer };
