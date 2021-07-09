import React from 'react';
import { Button as Btn } from 'react-native';

interface ButtonProps {
  value: string;
  onClick: () => void;
}

const Button = ({ value, onClick }: ButtonProps) => (
  <Btn
    onPress={onClick}
    title={value}
    color="#841584"
    accessibilityLabel="Learn more about this purple button"
  />
);
export { Button };
