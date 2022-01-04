import React, { useState } from 'react';
import { InputText } from './InputText';
import { isValidNumber } from '../../utils';
import type { InputTextDefaultProps } from '../../type';

export const InputTextNumber = ({
  testId,
  value,
  setValue,
  label,
}: InputTextDefaultProps) => {
  const [showError, setShowError] = useState<boolean>(false);
  const validateNumber = (numberValue: string) => {
    const isValid = isValidNumber(numberValue);
    setShowError(!isValid);
    setValue({ value: numberValue, isValid });
  };
  return (
    <InputText
      value={value}
      testId={testId}
      showError={showError}
      errorMessage={'Number is invalid'}
      validate={validateNumber}
      props={{
        label: label,
        placeholder: 'Enter the value',
        returnKeyType: 'next',
        maxLength: 20,
        accessible: true,
        accessibilityLabel: label,
        accessibilityHint: 'hint',
        accessibilityRole: 'text',
      }}
    />
  );
};
