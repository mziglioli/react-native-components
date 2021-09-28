import React, { useState } from 'react';
import { InputText, InputFieldProps } from './InputText';
import { isValidSecret } from '../../utils';
import type { DefaultProps } from '../../type';

export interface InputTextSecretProps extends DefaultProps {
  value: string;
  setValue: ({ value, isValid }: InputFieldProps) => void;
}

export const InputTextSecret = ({
  testId,
  value,
  setValue,
}: InputTextSecretProps) => {
  const [showError, setShowError] = useState<boolean>(false);
  const validateSecret = (secret: string) => {
    const isValid = isValidSecret(secret);
    setShowError(!isValid);
    setValue({ value: secret, isValid });
  };
  return (
    <InputText
      value={value}
      testId={testId}
      showError={showError}
      errorMessage={'Secret is invalid'}
      validate={validateSecret}
      props={{
        label: 'Secret',
        placeholder: 'Enter the secret we have emailed you',
        returnKeyType: 'next',
        maxLength: 4,
        minLength: 4,
      }}
    />
  );
};
