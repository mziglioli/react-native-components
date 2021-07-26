import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SideBar } from '../SideBar';
import { Page } from '../Page';
import { View, Button } from 'react-native';
import { TabBottom } from '../TabBottom';
import { buildItems, tabScenes, tabRoutes } from '../../utils';
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();
const SideBarItems = buildItems();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={(props) => (
          <SideBar
            currentPage={'Contact'}
            customer={{ name: 'Marcelo Ziglioli', initials: 'MZ' }}
            itemPress={(item) => {
              props.navigation.navigate(item.page);
            }}
            items={SideBarItems}
          />
        )}
      >
        <Drawer.Screen
          name="Home"
          component={(props) => (
            <View
              style={{
                flex: 1,
                flexDirection: 'column',
                backgroundColor: '#fff',
              }}
            >
              <Page
                page={'Home'}
                title={'Home'}
                onBackAction={() => {
                  console.log('onBackAction');
                  props.navigation.navigate('Home');
                }}
                onMenuAction={() => {
                  console.log('onMenuAction');
                  props.navigation.openDrawer();
                }}
              />
              <TabBottom tabRoutes={tabRoutes} scenes={tabScenes} />
            </View>
          )}
        />
        <Drawer.Screen name="second">
          {(props) => (
            <Page
              page={'second'}
              title="second page"
              onBackAction={() => {
                console.log('onBackAction');
                props.navigation.navigate('Home');
              }}
              onMenuAction={() => {
                console.log('onMenuAction');
                props.navigation.openDrawer();
              }}
            >
              <View>
                <Button
                  onPress={() => {
                    props.navigation.navigate('first');
                  }}
                  title={'second page'}
                />
              </View>
            </Page>
          )}
        </Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
export { Navigation };
