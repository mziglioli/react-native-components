import type {
  ColorType,
  ListItem,
  ListItems,
  MenuItem,
  MenuItems,
} from '../type';
import { Text, View } from 'react-native';
import {
  Title,
  Subheading,
  Paragraph,
  Headline,
  Caption,
} from 'react-native-paper';

import React from 'react';
import type {
  RecommendationUser,
  RecommendationsUsers,
} from '../type/recommendation';

/* istanbul ignore file */
export const buildMenuItem = (
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
export const buildListItem = (id: string, type: ColorType): ListItem => {
  return {
    id,
    title: `${id} title`,
    description: `${id} description`,
    type,
  };
};

// @ts-ignore
export const buildMenuItems = (): MenuItems => {
  return [
    buildMenuItem('Account', 'account', false),
    buildMenuItem('Help', 'help-circle', false),
    buildMenuItem('Contact', 'card-account-phone', false),
  ];
};

export const buildListItems = (): ListItems => {
  return [
    buildListItem('1', 'success'),
    buildListItem('2', 'success'),
    buildListItem('3', 'error'),
    buildListItem('4', 'error'),
    buildListItem('5', 'success'),
    buildListItem('6', 'warn'),
    buildListItem('7', 'warn'),
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

export const buildRecommendationUser = (id: number): RecommendationUser => {
  return {
    id: `123__${id}`,
    name: `User Test${id}`,
    initials: 'UT',
    email: 'test@email.com',
    mediaId: `media123__${id}`,
    mediaType: 'face',
    avatar:
      'https://media-exp1.licdn.com/dms/image/C4E03AQEV3M71yaKCLg/profile-displayphoto-shrink_200_200/0/1596888669832?e=1640822400&v=beta&t=6832lAnOfbI17JQ009D3uq6d8XKh6uH7dN6bSPM5Aic',
    date: '10 Oct 2021',
    score: 3.3,
    comments: `any comments for test ${id}`,
  };
};

export const buildRecommendationsUsers = (): RecommendationsUsers => {
  return [
    buildRecommendationUser(1),
    { ...buildRecommendationUser(2), avatar: undefined },
  ];
};
