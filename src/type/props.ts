import type React from 'react';

export interface DefaultProps {
  testId?: string;
  isMobile?: boolean;
  label?: string;
  children?: React.ReactNode;
}
export interface InputFieldProps {
  value: string;
  isValid: boolean;
}

export interface InputTextDefaultProps extends DefaultProps {
  value: string;
  setValue: ({ value, isValid }: InputFieldProps) => void;
}
