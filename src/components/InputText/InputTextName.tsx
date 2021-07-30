import React, { useState } from 'react';
import { InputText, InputFieldProps } from './InputText';
import { isValidName } from '../../utils';
import type { DefaultProps } from '../../type';

export interface InputTextNameProps extends DefaultProps {
  value: string;
  setValue: ({ value, isValid }: InputFieldProps) => void;
}

export const InputTextName = ({
  testId,
  value,
  setValue,
}: InputTextNameProps) => {
  const [showError, setShowError] = useState<boolean>(false);
  const validateName = (name: string) => {
    const isValid = isValidName(name);
    setShowError(!isValid);
    setValue({ value: name, isValid });
  };
  return (
    <InputText
      value={value}
      testId={testId}
      showError={showError}
      errorMessage={'Name is invalid'}
      validate={validateName}
      props={{
        label: 'Name',
        placeholder: 'Enter your name',
        returnKeyType: 'next',
        maxLength: 300,
      }}
    />
  );
};
