import React, { ReactNode } from 'react';
import { AppBarHeader } from '../AppBarHeader';
import { View, ScrollView } from 'react-native';

interface PageProps {
  page: string;
  title: string;
  onBackAction: () => void;
  onMenuAction: () => void;
  children?: ReactNode;
}

const Page = ({
  page,
  title,
  onBackAction,
  onMenuAction,
  children,
}: PageProps) => (
  <View>
    <AppBarHeader
      title={title}
      showBackButton={page !== 'Home'}
      onBackAction={onBackAction}
      onMenuAction={onMenuAction}
    />
    <ScrollView>{children}</ScrollView>
  </View>
);
export { Page };
