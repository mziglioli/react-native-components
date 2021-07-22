import React, { useState } from 'react';
import { BottomNavigation } from 'react-native-paper';
import type { IconSource } from 'react-native-paper/lib/typescript/components/Icon';

type Route = {
  key: string;
  title?: string;
  icon?: IconSource;
  badge?: string | number | boolean;
  color?: string;
  accessibilityLabel?: string;
  testID?: string;
};
export interface TabBottomProps {
  tabRoutes: Route[];
  scenes: {
    [key: string]: React.ComponentType<{
      route: any;
      jumpTo: (key: string) => void;
    }>;
  };
}

const TabBottom = ({ tabRoutes, scenes }: TabBottomProps) => {
  const [index, setIndex] = useState(0);
  const [routes] = useState(tabRoutes);
  const renderScene = BottomNavigation.SceneMap(scenes);
  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export { TabBottom };
