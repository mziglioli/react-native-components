import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SideBar } from '../../components';
import { View, Button } from 'react-native';
import { buildMenuItems } from '../../utils/BuilderTest';
import { NavigationContainer } from '@react-navigation/native';
import { PageContainer } from '../PageContainer';

const Drawer = createDrawerNavigator();
const SideBarItems = buildMenuItems();

const Navigation = () => {
  return (
    <View>
      <NavigationContainer
        onUnhandledAction={(action) => console.log('onUnhandledAction', action)}
      >
        <Drawer.Navigator
          initialRouteName="Contact"
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
            name="Contact"
            component={() => (
              <PageContainer
                page="Contact"
                name="Contact"
                backNavigateTo="Contact"
              />
            )}
          />
          <Drawer.Screen name="Help">
            {(props) => (
              <PageContainer page="Help" name="Help" backNavigateTo="Contact">
                <View>
                  <Button
                    onPress={() => {
                      props.navigation.navigate('Contact');
                    }}
                    title={'second page'}
                  />
                </View>
              </PageContainer>
            )}
          </Drawer.Screen>
        </Drawer.Navigator>
      </NavigationContainer>
    </View>
  );
};
export { Navigation };
