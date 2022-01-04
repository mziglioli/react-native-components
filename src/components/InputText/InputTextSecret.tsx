import React, { useState } from 'react';
import { InputText } from './InputText';
import { isValidSecret } from '../../utils';
import type { InputTextDefaultProps } from '../../type';

export const InputTextSecret = ({
  testId,
  value,
  setValue,
}: InputTextDefaultProps) => {
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
        accessible: true,
        accessibilityLabel: 'secret',
        accessibilityHint: 'hint',
        accessibilityRole: 'text',
      }}
    />
  );
};
