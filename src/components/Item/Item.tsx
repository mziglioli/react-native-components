import React from 'react';
import { List, IconButton } from 'react-native-paper';
import type { ColorType, DefaultProps } from '../../type';
import { parseColor, parseIconColor, Styles } from '../../utils';

export interface ItemProps extends DefaultProps {
  title: string;
  description: string;
  type: ColorType;
  onClick: () => void;
}

const Item = ({ testId, title, description, type, onClick }: ItemProps) => {
  const color = parseColor(type);
  const icon = parseIconColor(type);
  return (
    <List.Item
      style={{
        ...Styles.notification.card,
        borderColor: color,
      }}
      touchSoundDisabled={false}
      testID={`Item__${testId}`}
      title={title}
      description={description}
      left={(props) => <List.Icon {...props} icon={icon} color={color} />}
      right={() => (
        <IconButton
          touchSoundDisabled={false}
          testID={`Item__Delete__${testId}`}
          icon="delete"
          onPress={onClick}
          color={color}
        />
      )}
    />
  );
};

export { Item };
