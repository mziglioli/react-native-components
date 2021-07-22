import React, { ReactNode } from 'react';
import { AppBarHeader } from '../AppBarHeader';
import { View, ScrollView } from 'react-native';

interface PageProps {
  page: string;
  title: string;
  navigation: any;
  children?: ReactNode;
}

const Page = ({ page, title, navigation, children }: PageProps) => (
  <View>
    <AppBarHeader
      title={title}
      showBackButton={page !== 'Home'}
      onBackAction={() => {
        console.log('onBackAction');
        navigation.navigate('Home');
      }}
      onMenuAction={() => {
        console.log('onMenuAction');
        navigation.openDrawer();
      }}
    />
    <ScrollView>{children}</ScrollView>
  </View>
);
export { Page };
