import React from 'react';
import { render } from '@testing-library/react-native';
import { TitleColored } from './TitleColored';

describe('<TitleColored>', () => {
  const renderComponent = (overrides = {}) =>
    render(
      <TitleColored
        testId="test_id"
        content="test"
        type={'info'}
        {...overrides}
      />
    );
  it('should render the component', () => {
    const { getByTestId } = renderComponent();
    expect(getByTestId('Title__test_id')).toBeDefined();
  });
});
