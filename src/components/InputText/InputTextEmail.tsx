import React, { useState } from 'react';
import { InputText, InputFieldProps } from './InputText';
import { isValidEmail } from '../../utils';
import type { DefaultProps } from '../../type';

export interface InputTextEmailProps extends DefaultProps {
  value: string;
  setValue: ({ value, isValid }: InputFieldProps) => void;
}

export const InputTextEmail = ({
  testId,
  value,
  setValue,
}: InputTextEmailProps) => {
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
      }}
    />
  );
};
