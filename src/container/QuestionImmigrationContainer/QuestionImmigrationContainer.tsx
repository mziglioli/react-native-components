import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import type { DefaultProps, SelectItem, SelectItems } from '../../type';
import { Styles } from '../../utils';
import {
  InputText,
  InputTextNumber,
  Select,
  TitleColored,
} from '../../components';
import { Caption, RadioButton } from 'react-native-paper';
import type { InputFieldProps } from '../../type';

export interface QuestionImmigrationContainerProps extends DefaultProps {
  countries: SelectItems;
  cities: SelectItems;
  homeTypes: SelectItems;
}

const QuestionImmigrationContainer = ({
  isMobile,
  countries,
  cities,
  homeTypes,
}: QuestionImmigrationContainerProps) => {
  const [council, setCouncil] = useState<string>('');
  const validateCouncil = (text: string) => {
    console.log('validateCouncil', text);
    setCouncil(text);
  };
  const [ownHome, setOwnHome] = useState<boolean>(false);
  const [houseValue, setHouseValue] = useState<string>('');

  return (
    <View testID={`QuestionImmigrationContainer`}>
      <TitleColored
        type={'info'}
        content={'Questions about your immigration'}
      />
      <ScrollView
        style={{ ...Styles.page.view, paddingTop: 10, paddingBottom: 10 }}
        testID={`QuestionImmigrationContainer__Questions`}
      >
        <Select
          caption={'Select your country:'}
          title={'Country'}
          items={countries}
          onSelect={(item: SelectItem) => console.log('select', item)}
        />
        <Select
          caption="Select your city:"
          title="Cities"
          items={cities}
          onSelect={(item: SelectItem) => console.log('select', item)}
        />
        <InputText
          value={council}
          validate={validateCouncil}
          showError={false}
          errorMessage={''}
          props={{
            label: 'Council',
            placeholder: 'Enter the council name',
            returnKeyType: 'next',
            maxLength: 300,
          }}
        />
        <Select
          caption={'What is the type of your home:'}
          title={'Home type'}
          items={homeTypes}
          onSelect={(item: SelectItem) => console.log('select', item)}
        />
        <Caption>Do you own the place:</Caption>
        <RadioButton.Group
          onValueChange={(newValue) => setOwnHome(newValue === 'Yes')}
          value={ownHome ? 'Yes' : 'No'}
        >
          <View style={Styles.score}>
            <RadioButton value="Yes" />
            <Caption>Yes</Caption>
          </View>
          <View style={Styles.score}>
            <RadioButton value="No" />
            <Caption>No</Caption>
          </View>
        </RadioButton.Group>
        <InputTextNumber
          label="House price"
          value={houseValue}
          setValue={({ value, isValid }: InputFieldProps): void => {
            if (isValid) {
              setHouseValue(value);
            }
          }}
          isMobile={isMobile}
        />
      </ScrollView>
    </View>
  );
};
export { QuestionImmigrationContainer };
