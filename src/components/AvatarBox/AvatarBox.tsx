import React from 'react';
import { Avatar } from 'react-native-paper';
import type { DefaultProps } from '../../type';

export interface AvatarBoxProps extends DefaultProps {
  image?: string;
}

const AvatarBox = ({ testId, image }: AvatarBoxProps) => (
  <>
    {image && (
      <Avatar.Image
        testID={`AvatarBox__Image__${testId}`}
        size={40}
        source={{
          uri: image,
        }}
      />
    )}
    {!image && (
      <Avatar.Icon
        testID={`AvatarBox__Icon__${testId}`}
        size={40}
        icon={'cancel'}
      />
    )}
  </>
);
export { AvatarBox };
