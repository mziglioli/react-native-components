import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { SideBar } from '../SideBar';
import { Page } from '../Page';
import { View, Button } from 'react-native';
import { TabBottom } from '../TabBottom';
import { buildItems, tabScenes, tabRoutes } from '../../utils';

const Drawer = createDrawerNavigator();
const SideBarItems = buildItems();

const Navigation = () => (
  <NavigationContainer>
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => (
        <SideBar
          title="Some title"
          navigation={props.navigation}
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
            <Page page={'Home'} title={'Home'} navigation={props.navigation} />
            <TabBottom tabRoutes={tabRoutes} scenes={tabScenes} />
          </View>
        )}
      />
      <Drawer.Screen name="second">
        {(props) => (
          <Page
            page={'second'}
            title="second page"
            navigation={props.navigation}
          >
            <View>
              <Button
                onPress={() => props.navigation.navigate('first')}
                title={'second page'}
              />
            </View>
          </Page>
        )}
      </Drawer.Screen>
    </Drawer.Navigator>
  </NavigationContainer>
);
export { Navigation };
