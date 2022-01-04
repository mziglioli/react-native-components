import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Button, Title, Subheading } from 'react-native-paper';
import { Styles } from '../../utils';
import type { DefaultProps, InputFieldProps } from '../../type';
import { InputTextEmail } from '../InputText';
import { ParagraphColored } from '../Colored';

const initialFieldProp = { value: '', isValid: false };

export interface ResendEmailProps extends DefaultProps {
  title: string;
  buttonTitle: string;
  showError: boolean;
  onLoginClick: () => void;
  onResetClick: (email: string) => void;
}

export const ResendEmail = ({
  title,
  buttonTitle,
  testId,
  showError,
  onLoginClick,
  onResetClick,
}: ResendEmailProps) => {
  const [email, setEmail] = useState<InputFieldProps>(initialFieldProp);
  return (
    <View testID={`ResendEmail__${testId}`}>
      <Title>{title}</Title>
      <View
        style={{
          paddingTop: 10,
          paddingBottom: 10,
        }}
      >
        <InputTextEmail
          testId={`ResendEmail__Email__${testId}`}
          value={email.value}
          setValue={(inputFieldProps) => setEmail(inputFieldProps)}
        />
      </View>
      {showError && (
        <ParagraphColored
          testId={`ResendEmail__Error__${testId}`}
          type={'error'}
          content={'Something went wrong, please try again later'}
        />
      )}
      <Button
        testID={`ResendEmail__Submit__${testId}`}
        mode="contained"
        disabled={!email.isValid}
        onPress={() => {
          console.log('clicked on submit');
          onResetClick(email.value);
        }}
      >
        {buttonTitle}
      </Button>
      <View style={Styles.row}>
        <TouchableOpacity
          testID={`ResendEmail__Login__${testId}`}
          onPress={onLoginClick}
        >
          <Subheading>← Back to login</Subheading>
        </TouchableOpacity>
      </View>
    </View>
  );
};
