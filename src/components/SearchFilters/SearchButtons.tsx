import React from 'react';
import type { DefaultProps } from '../../type';
import { View } from 'react-native';
import { Button } from 'react-native-paper';

export interface SearchButtonsProps extends DefaultProps {
  showMore?: boolean;
  onShowMore: () => void;
}

const SearchButtons = ({ showMore, onShowMore }: SearchButtonsProps) => (
  <View testID={`SearchButtons`}>
    {showMore && (
      <Button testID={`SearchButtons__ShowMore`} onPress={onShowMore}>
        Show more
      </Button>
    )}
    {!showMore && (
      <Button testID={`SearchButtons__ThatIsAll`} disabled onPress={() => {}}>
        that is all
      </Button>
    )}
  </View>
);
export { SearchButtons };
