import React, { useState } from 'react';
import { InputText } from './InputText';
import { isValidName } from '../../utils';
import type { InputTextDefaultProps } from '../../type';

export const InputTextName = ({
  testId,
  value,
  setValue,
}: InputTextDefaultProps) => {
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
        accessible: true,
        accessibilityLabel: 'name',
        accessibilityHint: 'hint',
        accessibilityRole: 'text',
      }}
    />
  );
};
