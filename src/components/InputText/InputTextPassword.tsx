import React, { useState } from 'react';
import { TextInput } from 'react-native-paper';
import type { DefaultProps } from '../../type';
import { InputFieldProps, InputText } from './InputText';
import { isValidPassword } from '../../utils';

export interface InputTextPasswordProps extends DefaultProps {
  value: string;
  setValue: ({ value, isValid }: InputFieldProps) => void;
}
export const InputTextPassword = ({
  testId,
  value,
  setValue,
}: InputTextPasswordProps) => {
  const [showError, setShowError] = useState<boolean>(false);
  const validatePassword = (password: string) => {
    const isValid = isValidPassword(password);
    setShowError(!isValid);
    setValue({ value: password, isValid });
  };
  const [secureText, setSecureText] = useState<boolean>(true);
  return (
    <InputText
      value={value}
      testId={testId}
      showError={showError}
      errorMessage={'Password is invalid'}
      validate={validatePassword}
      props={{
        label: 'Password',
        placeholder: 'Enter your password',
        autoCapitalize: 'none',
        secureTextEntry: secureText,
        returnKeyType: 'done',
        maxLength: 100,
        right: (
          <TextInput.Icon
            testID={`InputText__SecureText__${testId}`}
            touchSoundDisabled={false}
            name={secureText ? 'eye' : 'eye-off'}
            onPress={() => {
              setSecureText(!secureText);
            }}
          />
        ),
      }}
    />
  );
};
