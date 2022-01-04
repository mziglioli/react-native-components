import React from 'react';
import { Card } from 'react-native-paper';
import { ParagraphColored, TitleColored } from '../Colored';
import type { DefaultProps } from '../../type';
import { Styles } from '../../utils';
import { AvatarBox } from '../AvatarBox';

export interface RatingCardProps extends DefaultProps {
  title: string;
  subtitle?: string;
  image?: string;
}

const RatingCard = ({
  testId,
  title,
  subtitle,
  image,
  children,
}: RatingCardProps) => {
  return (
    <Card testID={`RatingCard__${testId}`} style={Styles.provider}>
      <Card.Title
        testID={`RatingCard__Title__${testId}`}
        title={<TitleColored content={title} type={undefined} />}
        subtitle={
          subtitle && <ParagraphColored type={undefined} content={subtitle} />
        }
        left={() => <AvatarBox image={image} />}
      />
      <Card.Content>{children}</Card.Content>
    </Card>
  );
};
export { RatingCard };
