import React, { useState } from 'react';
import { InputText } from './InputText';
import { isValidEmail } from '../../utils';
import type { InputTextDefaultProps } from '../../type';

export const InputTextEmail = ({
  testId,
  value,
  setValue,
}: InputTextDefaultProps) => {
  const [showError, setShowError] = useState<boolean>(false);
  const validateEmail = (email: string) => {
    const isValid = isValidEmail(email);
    setShowError(!isValid);
    setValue({ value: email, isValid });
  };
  return (
    <InputText
      value={value}
      testId={testId}
      showError={showError}
      errorMessage={'Email is invalid'}
      validate={validateEmail}
      props={{
        label: 'Email',
        placeholder: 'Enter your email',
        autoCapitalize: 'none',
        textContentType: 'emailAddress',
        keyboardType: 'email-address',
        returnKeyType: 'next',
        maxLength: 100,
        accessible: true,
        accessibilityLabel: 'email',
        accessibilityHint: 'hint',
        accessibilityRole: 'text',
      }}
    />
  );
};
