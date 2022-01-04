import React, { useState } from 'react';
import type { DefaultProps } from '../../type';
import { View } from 'react-native';
import { InputText } from '../InputText';
import { Checkbox } from 'react-native-paper';
import { parseColor, Styles } from '../../utils';

export interface FilterButtonsProps extends DefaultProps {
  onlyFriendsClick: (onlyFriends: boolean) => void;
}

const FilterButtons = ({
  testId,
  onlyFriendsClick,
  isMobile,
}: FilterButtonsProps) => {
  const [text, setText] = useState<string>('');
  const [friendsOnly, setFriendsOnly] = useState<boolean>(true);

  const changeInputValue = (value: string) => {
    console.log('changeInputValue', value);
    setText(value);
  };
  const changeCheckValue = () => {
    const newValue = !friendsOnly;
    console.log('changeCheckValue', newValue);
    setFriendsOnly(newValue);
    onlyFriendsClick(newValue);
  };

  return (
    <View
      testID={`FilterButtons__${testId}`}
      style={{
        ...Styles.page.view,
        flexDirection: isMobile ? 'column' : 'row',
      }}
    >
      <InputText
        value={text}
        testId={`FilterButtons__Search__${testId}`}
        showError={false}
        errorMessage={'Not found'}
        validate={changeInputValue}
        props={{
          label: 'Search',
          placeholder: 'Enter a name',
          autoCapitalize: 'none',
          returnKeyType: 'next',
          maxLength: 100,
        }}
      />
      <Checkbox.Item
        testID={`FilterButtons__OnlyFriends__${testId}`}
        position="leading"
        color={parseColor('info')}
        style={{
          paddingLeft: 0,
          marginLeft: 0,
          marginTop: isMobile ? 0 : 10,
        }}
        labelStyle={{
          textAlign: 'left',
        }}
        label="Only friends"
        status={friendsOnly ? 'checked' : 'unchecked'}
        onPress={changeCheckValue}
      />
    </View>
  );
};
export { FilterButtons };
