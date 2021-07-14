import React from 'react';
import { Button as Btn } from 'react-native-paper';

interface ButtonProps {
  value: string;
  onClick: () => void;
}

const Button = ({ value, onClick }: ButtonProps) => (
  <Btn icon="camera" mode="contained" onPress={onClick}>
    {value}
  </Btn>
);
export { Button };
