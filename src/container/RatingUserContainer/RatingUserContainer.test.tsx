import React from 'react';
import { render } from '@testing-library/react-native';
import { RatingUserContainer } from './RatingUserContainer';
import { buildRecommendationsUsers } from '../../utils/BuilderTest';

describe('<RatingUserContainer>', () => {
  const renderComponent = (overrides = {}) =>
    render(
      <RatingUserContainer
        testId="test_id"
        isMobile={false}
        recommendations={[]}
        onlyFriendsClick={() => {}}
        onShowMoreClick={() => {}}
        providerName="provider"
        {...overrides}
      />
    );
  it('should render the component', () => {
    const { getByTestId, queryByTestId } = renderComponent();
    expect(getByTestId('RatingUserContainer')).toBeDefined();
    expect(queryByTestId('RatingUserContainer__Recommendations')).toBeNull();
  });

  it('should render the component with recommendations', () => {
    const { getByTestId } = renderComponent({
      recommendations: buildRecommendationsUsers(),
    });
    expect(getByTestId('RatingUserContainer')).toBeDefined();
    expect(getByTestId('RatingUserContainer__Recommendations')).toBeDefined();
  });
});
