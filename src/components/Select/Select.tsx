import React, { useState } from 'react';
import { Autocomplete } from 'react-native-paper-autocomplete';
import type { SelectItem, SelectItems, DefaultProps } from '../../type';
import { Styles } from '../../utils';

export interface SelectProps extends DefaultProps {
  title: string;
  items: SelectItems;
  onSelect: (item: SelectItem) => void;
}

const Select = ({ testId, title, items, onSelect }: SelectProps) => {
  const [selectedItem, setSelectedItem] = useState<any>();

  const onChangeSelection = (item: any) => {
    setSelectedItem(item);
    if (item && item.value > 0) {
      onSelect(item);
    }
  };

  return (
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
  );
};
export { Select };
