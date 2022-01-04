import React from 'react';
import { RatingUser } from './RatingUser';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/RatingUser',
  component: RatingUser,
};

const defaultValues = {
  title: 'Juca title',
  subtitle: 'subtitle',
  description: '',
  image:
    'https://media-exp1.licdn.com/dms/image/C4E03AQEV3M71yaKCLg/profile-displayphoto-shrink_200_200/0/1596888669832?e=1640822400&v=beta&t=6832lAnOfbI17JQ009D3uq6d8XKh6uH7dN6bSPM5Aic',
  score: '',
  comments: 'this is a simple comment for test.',
  testId: 'test',
  providerId: 'providerId',
  onViewDetailedPress: action('onViewDetailedPress'),
  isMobile: false,
};

export const BasicUsage = (args: any) => <RatingUser {...args} />;
BasicUsage.args = {
  ...defaultValues,
};
