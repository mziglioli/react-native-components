import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { SideBar } from '../SideBar';
import { buildItems } from '../utils/BuilderTest';
import { Page } from '../Page';
import { View, Button, Text } from 'react-native';
import { TabBottom } from '../TabBottom';

const Drawer = createDrawerNavigator();
const SideBarItems = buildItems();
const MusicRoute = () => <Text>Music</Text>;
const AlbumsRoute = () => <Text>Albums</Text>;
const RecentsRoute = () => <Text>Recents</Text>;
const tabRoutes = [
  { key: 'music', title: 'Music', icon: 'queue-music' },
  { key: 'albums', title: 'Albums', icon: 'album' },
  { key: 'recents', title: 'Recents', icon: 'history' },
];
const tabScenes = {
  music: MusicRoute,
  albums: AlbumsRoute,
  recents: RecentsRoute,
};

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
            children={
              <View>
                <Button
                  onPress={() => props.navigation.navigate('first')}
                  title={'second page'}
                />
              </View>
            }
          />
        )}
      </Drawer.Screen>
    </Drawer.Navigator>
  </NavigationContainer>
);
export { Navigation };
