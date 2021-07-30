import React from 'react';
import { Item } from '../../components';
import { ScrollView, View } from 'react-native';
import type { DefaultProps, ListItem, ListItems } from '../../type';
import { Styles } from '../../utils';

export interface ItemContainerProps extends DefaultProps {
  items: ListItems;
  onItemClick: (item: ListItem) => void;
}

const ItemContainer = ({ testId, items, onItemClick }: ItemContainerProps) => (
  <ScrollView
    testID={`ItemContainer__View__${testId}`}
    // @ts-ignore
    style={Styles.page.view}
  >
    {items.length > 0 &&
      items.map((item, index) => (
        <View
          key={`ItemContainer__View__${testId}__${index}`}
          style={Styles.list.item}
        >
          <Item
            testId={`${testId}__${index}`}
            title={item.title}
            description={item.description}
            type={item.type}
            onClick={() => {
              onItemClick(item);
            }}
          />
        </View>
      ))}
  </ScrollView>
);

export { ItemContainer };
