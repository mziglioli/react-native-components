import React from 'react';
import { Item } from '../../components';
import { ScrollView, View } from 'react-native';
import type { DefaultProps, ListItems } from '../../type';
import { Styles } from '../../utils';

export interface ItemContainerProps extends DefaultProps {
  items: ListItems;
}

const ItemContainer = ({ testId, items }: ItemContainerProps) => {
  return (
    // @ts-ignore
    <View testID={`ItemContainer__View__${testId}`} style={Styles.page.view}>
      {items.length > 0 &&
        items.map((item, index) => (
          <ScrollView
            key={`ItemContainer__View__${testId}__${index}`}
            style={{
              padding: 5,
            }}
          >
            <Item
              title={item.title}
              description={item.description}
              type={item.type}
              onClick={() => {
                console.log('clicked', item);
              }}
            />
          </ScrollView>
        ))}
    </View>
  );
};
export { ItemContainer };
