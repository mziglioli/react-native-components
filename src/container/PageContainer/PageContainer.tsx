import React from 'react';
import { useIsDrawerOpen } from '@react-navigation/drawer';
import { AppBarHeader, Page } from '../../components';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { DefaultProps } from '../../type';
import { Styles } from '../../utils';

interface PageContainerProps extends DefaultProps {
  page: string;
  name: string;
  backNavigateTo: string;
}

const PageContainer = ({
  page,
  name,
  backNavigateTo,
  testId,
  children,
}: PageContainerProps) => {
  const navigation = useNavigation();
  const isDrawerOpen = useIsDrawerOpen();

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
      <Page testId={testId} page={page} title={name}>
        {children}
      </Page>
    </View>
  );
};
export { PageContainer };
