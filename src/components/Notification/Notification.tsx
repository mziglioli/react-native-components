import React from 'react';
import { Card, IconButton } from 'react-native-paper';
import { parseColor, parseIconColor, Styles } from '../../utils';
import { ParagraphColored, TitleColored } from '../Colored';
import type { ColorType, DefaultProps } from '../../type';

export interface NotificationProps extends DefaultProps {
  type?: ColorType;
  title: string;
  subtitle?: string;
}

const Notification = ({
  testId,
  type,
  title,
  subtitle,
  children,
}: NotificationProps) => {
  const color = parseColor(type);
  const icon = parseIconColor(type);
  return (
    <Card
      testID={`Notification__Card__${testId}`}
      style={{
        ...Styles.notification.card,
        borderColor: color,
      }}
    >
      <Card.Title
        testID={`Notification__Card__Iconized__${testId}`}
        title={<TitleColored content={title} type={type} />}
        subtitle={
          subtitle && <ParagraphColored type={type} content={subtitle} />
        }
        left={() => (
          <IconButton icon={icon} color={color} touchSoundDisabled={false} />
        )}
      />
      {children && <Card.Content>{children}</Card.Content>}
    </Card>
  );
};
export { Notification };
