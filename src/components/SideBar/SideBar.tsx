import React from 'react';
import { Avatar, Divider, Drawer } from 'react-native-paper';
import type { MenuItems, MenuItem } from '../../type';
import { View, Text } from 'react-native';

interface SideBarProps {
  currentPage: string;
  customer: {
    name: string;
    initials: string;
  };
  items: MenuItems;
  itemPress: (item: MenuItem) => void;
}

const SideBar = ({ currentPage, customer, items, itemPress }: SideBarProps) => {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          padding: 14,
          flex: 1,
          flexDirection: 'row',
        }}
      >
        <Avatar.Text size={32} label={customer.initials} />
        <Text style={{ paddingLeft: 26, paddingTop: 4 }}>{customer.name}</Text>
      </View>
      <Divider style={{ marginBottom: 6 }} />
      <Drawer.Section testID="SideBar__Drawer">
        {items.length > 0 &&
          items.map((item, index) => (
            <Drawer.Item
              key={`SideBar__Drawer_Item_${index}`}
              testID={`SideBar__Drawer_Item_${index}`}
              label={item.label}
              active={item.page === currentPage}
              icon={item.icon}
              onPress={() => {
                itemPress(item);
              }}
              accessible
            />
          ))}
      </Drawer.Section>
    </View>
  );
};

export { SideBar };
