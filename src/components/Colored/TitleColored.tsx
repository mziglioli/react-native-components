import React from 'react';
import { Title } from 'react-native-paper';
import { parseColor } from '../../utils';
import type { ColorType, DefaultProps } from '../../type';

export interface ColoredProps extends DefaultProps {
  type: ColorType;
  content: string;
}

const TitleColored = ({ testId, type, content }: ColoredProps) => {
  return (
    <Title
      testID={`Title__${testId}`}
      style={{
        color: parseColor(type),
      }}
    >
      {content}
    </Title>
  );
};
export { TitleColored };
