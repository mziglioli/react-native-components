/* istanbul ignore file */
import React, { useState } from 'react';
import { Autocomplete } from 'react-native-paper-autocomplete';
import type { SelectItem, SelectItems, DefaultProps } from '../../type';
import { Styles } from '../../utils';
import { Caption } from 'react-native-paper';

export interface SelectProps extends DefaultProps {
  title: string;
  caption?: string;
  items: SelectItems;
  onSelect: (item: SelectItem) => void;
}

const Select = ({ testId, title, caption, items, onSelect }: SelectProps) => {
  const [selectedItem, setSelectedItem] = useState<any>();
  const onChangeSelection = (item: any) => {
    setSelectedItem(item);
    if (item && item.value > 0) {
      onSelect(item);
    }
  };

  return (
    <>
      {caption && <Caption>{caption}</Caption>}
      <Autocomplete
        onChange={onChangeSelection}
        value={selectedItem}
        options={items}
        // @ts-ignore
        inputProps={{
          placeholder: title,
          style: Styles.select.input,
          testID: `Select__Input__${testId}`,
        }}
        style={Styles.select.div}
      />
    </>
  );
};
export { Select };
