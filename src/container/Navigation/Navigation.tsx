/* istanbul ignore file */
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SideBar } from '../../components';
import { View } from 'react-native';
import { buildMenuItems } from '../../utils/BuilderTest';
import { NavigationContainer } from '@react-navigation/native';
import { PageContainer } from '../PageContainer';
import type { DefaultProps } from '../../type';

const Drawer = createDrawerNavigator();
const SideBarItems = buildMenuItems();

const Navigation = ({ children }: DefaultProps) => {
  return (
    <View>
      <NavigationContainer
        onUnhandledAction={(action) => console.log('onUnhandledAction', action)}
      >
        <Drawer.Navigator
          initialRouteName="Contact"
          drawerContent={(props) => (
            <SideBar
              currentPage={'Test'}
              customer={{ name: 'Marcelo Ziglioli', initials: 'MZ' }}
              itemPress={(item) => {
                props.navigation.navigate(item.page);
              }}
              items={SideBarItems}
            />
          )}
        >
          <Drawer.Screen
            name="Test"
            component={() => (
              <PageContainer page="Test" name="Test" backNavigateTo="Test">
                {children}
              </PageContainer>
            )}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </View>
  );
};
export { Navigation };
