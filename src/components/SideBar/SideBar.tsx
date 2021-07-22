import React from 'react';
import { Drawer } from 'react-native-paper';
import type { MenuItems } from '../../type';
import { View } from 'react-native';

interface SideBarProps {
  title: string;
  items: MenuItems;
  navigation?: any;
}

const SideBar = ({ title, items, navigation }: SideBarProps) => {
  return (
    <View style={{ flex: 1 }}>
      <Drawer.Section title={title} testID="SideBar__Drawer">
        {items.length > 0 &&
          items.map((item, index) => (
            <Drawer.Item
              key={`SideBar__Drawer_Item_${index}`}
              testID={`SideBar__Drawer_Item_${index}`}
              label={item.label}
              active={item.active || false}
              icon={item.icon}
              onPress={() => {
                navigation?.navigate(item.page);
              }}
              accessible
            />
          ))}
      </Drawer.Section>
    </View>
  );
};

export { SideBar };
