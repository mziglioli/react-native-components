/* istanbul ignore file */
import React from 'react';
import { useIsDrawerOpen } from '@react-navigation/drawer';
import { AppBarHeader } from '../../components';
import { ScrollView, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { DefaultProps } from '../../type';
import { Styles } from '../../utils';
import { Dimensions } from 'react-native';

interface PageContainerProps extends DefaultProps {
  page: string;
  name: string;
  backNavigateTo: string;
}

const PageContainer = ({
  page,
  backNavigateTo,
  testId,
  children,
}: PageContainerProps) => {
  const navigation = useNavigation();
  const isDrawerOpen = useIsDrawerOpen();

  const window = Dimensions.get('window');
  console.log('window width', window.width);

  return (
    // @ts-ignore
    <View style={Styles.page.view}>
      <AppBarHeader
        title={page}
        showBackButton={page !== 'Home'}
        onBackAction={() => {
          console.log('onBackAction');
          navigation.navigate(backNavigateTo);
        }}
        onMenuAction={() => {
          console.log('onMenuAction', isDrawerOpen);
          if (isDrawerOpen) {
            // @ts-ignore
            navigation.closeDrawer();
          } else {
            // @ts-ignore
            navigation.openDrawer();
          }
        }}
      />
      <View
        testID={`Page__Header__${testId}`}
        // @ts-ignore
        style={{
          ...Styles.page.content,
          paddingHorizontal: window.width < 500 ? 0 : 20,
        }}
      >
        <ScrollView testID={`Page__Content__${testId}`}>{children}</ScrollView>
      </View>
    </View>
  );
};
export { PageContainer };
