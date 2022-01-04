import React from 'react';
import { Avatar, Divider, Drawer } from 'react-native-paper';
import type { MenuItems, MenuItem } from '../../type';
import { View, Text } from 'react-native';
import { Styles } from '../../utils';

export interface SideBarProps {
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
    <View testID="SideBar" style={Styles.sidebar.box}>
      <View testID="SideBar__Head" style={Styles.sidebar.head}>
        <Avatar.Text size={32} label={customer.initials} />
        <Text style={Styles.sidebar.title}>{customer.name}</Text>
      </View>
      <Divider testID="SideBar__Divider" style={Styles.sidebar.divider} />
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
