import React from 'react';
import { TextInput } from 'react-native-paper';
import { View } from 'react-native';
import type { DefaultProps } from '../../type';
import { ParagraphColored } from '../Colored';
import { Styles } from '../../utils';

export const initialFieldProp = { value: '', isValid: false };

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
        label={'label'}
        value={value}
        testID={`InputText__${testId}`}
        mode="outlined"
        error={showError}
        style={Styles.input}
        underlineColor="transparent"
        onChangeText={validate}
        textAlign={'left'}
        onTextInput={validate}
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
