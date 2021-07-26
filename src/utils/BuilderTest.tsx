import type { MenuItem, MenuItems } from '../type';
import { Text, View } from 'react-native';
import {
  Title,
  Subheading,
  Paragraph,
  Headline,
  Caption,
} from 'react-native-paper';

import React from 'react';

/* istanbul ignore file */
export const buildItem = (
  label: string,
  icon: string,
  active: boolean
): MenuItem => {
  return {
    label: `${label}`,
    icon: icon,
    active: active,
    page: `${label}`,
  };
};

// @ts-ignore
export const buildItems = (): MenuItems => {
  return [
    buildItem('Account', 'account', false),
    buildItem('Help', 'help-circle', false),
    buildItem('Contact', 'card-account-phone', false),
  ];
};

export const buildPage = (title: string, subtitle: string) => (
  <View>
    <Title>{title}</Title>
    <Subheading>{subtitle}</Subheading>
    <Paragraph>this is a paragraph</Paragraph>
    <Headline>this is a headline</Headline>
    <Caption>this is a caption</Caption>
    <Text>this is a normal text</Text>
  </View>
);

export const tabRoutes = [
  { key: 'music', title: 'Music', icon: 'queue-music' },
  { key: 'albums', title: 'Albums', icon: 'album' },
  { key: 'recents', title: 'Recents', icon: 'history' },
];
export const tabScenes = {
  music: () => buildPage('music page', 'this is a music content'),
  albums: () => buildPage('albums page', 'this is a albums content'),
  recents: () => buildPage('recents page', 'this is a recents content'),
};
