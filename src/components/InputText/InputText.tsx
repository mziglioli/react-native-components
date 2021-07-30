import React from 'react';
import { TextInput } from 'react-native-paper';
import { View } from 'react-native';
import type { DefaultProps } from '../../type';
import { ParagraphColored } from '../Colored';
import { Styles } from '../../utils';

export interface InputFieldProps {
  value: string;
  isValid: boolean;
}
export interface InputTextProps extends DefaultProps {
  value: string | undefined;
  validate: (e: any) => void;
  showError: boolean;
  errorMessage: string;
  props: any;
}

export const InputText = ({
  testId,
  value,
  validate,
  showError,
  errorMessage,
  props,
}: InputTextProps) => {
  return (
    <View>
      <TextInput
        value={value}
        testID={`InputText__${testId}`}
        mode="outlined"
        error={showError}
        style={Styles.input}
        underlineColor="transparent"
        onChangeText={validate}
        // onBlur={(e: any) => {
        //   validate(e.target.value);
        // }}
        {...props}
      />
      {showError && (
        <ParagraphColored
          testId={`InputText__Error__${testId}`}
          type={'error'}
          content={errorMessage}
        />
      )}
    </View>
  );
};
