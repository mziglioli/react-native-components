import React from 'react';
import { Card, Paragraph } from 'react-native-paper';
import { ParagraphColored, TitleColored } from '../Colored';
import type { DefaultProps } from '../../type';
import { RatingScore } from '../Rating';
import { Styles } from '../../utils';
import { AvatarBox } from '../AvatarBox';

export interface ProviderCardProps extends DefaultProps {
  title: string;
  subtitle?: string;
  description?: string;
  image?: string;
  score?: number;
}

const ProviderCard = ({
  testId,
  title,
  subtitle,
  description,
  image,
  score,
}: ProviderCardProps) => {
  return (
    <Card testID={`ProviderCard__${testId}`} style={Styles.provider}>
      <Card.Title
        testID={`ProviderCard__Title__${testId}`}
        title={<TitleColored content={title} type={undefined} />}
        subtitle={
          subtitle && <ParagraphColored type={undefined} content={subtitle} />
        }
        left={() => <AvatarBox image={image} />}
      />
      <Card.Content>
        {description && (
          <Paragraph testID={`ProviderCard__Paragraph__${testId}`}>
            {description}
          </Paragraph>
        )}
        <RatingScore score={score || 0} />
      </Card.Content>
    </Card>
  );
};
export { ProviderCard };
