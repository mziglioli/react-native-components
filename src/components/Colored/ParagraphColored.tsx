import React from 'react';
import { Paragraph } from 'react-native-paper';
import { parseColor } from '../../utils';
import type { ColoredProps } from './TitleColored';

const ParagraphColored = ({ testId, type, content, bold }: ColoredProps) => {
  return (
    <Paragraph
      testID={`Paragraph__${testId}`}
      style={{
        color: parseColor(type),
        fontWeight: bold ? 'bold' : 'normal',
      }}
    >
      {content}
    </Paragraph>
  );
};
export { ParagraphColored };
