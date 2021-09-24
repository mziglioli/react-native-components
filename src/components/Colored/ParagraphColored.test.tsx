import React from 'react';
import { render } from '@testing-library/react-native';
import { ParagraphColored } from './ParagraphColored';

describe('<ParagraphColored>', () => {
  const renderComponent = (overrides = {}) =>
    render(
      <ParagraphColored
        testId="test_id"
        content="test"
        type={'info'}
        {...overrides}
      />
    );
  it('should render the component', () => {
    const { getByTestId } = renderComponent();
    expect(getByTestId('Paragraph__test_id')).toBeDefined();
  });
});
