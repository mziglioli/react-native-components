import React from 'react';
import { Drawer } from 'react-native-paper';
import type { MenuItems } from '../../type';

interface SideBarProps {
  items: MenuItems;
}

const SideBar = ({ items }: SideBarProps) => {
  return (
    <Drawer.Section title="Some title" testID="SideBar__Drawer">
      {items.length > 0 &&
        items.map((item, index) => (
          <Drawer.Item
            key={`SideBar__Drawer_Item_${index}`}
            testID={`SideBar__Drawer_Item_${index}`}
            label={item.label}
            active={item.active || false}
            icon={item.icon}
            onPress={item.onPress}
            accessible
          />
        ))}
    </Drawer.Section>
  );
};

export { SideBar };
