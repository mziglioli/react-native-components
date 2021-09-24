import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Button, Title, Subheading } from 'react-native-paper';
import { Styles } from '../../utils';
import type { DefaultProps } from '../../type';
import { InputFieldProps, InputTextEmail } from '../InputText';
import { ParagraphColored } from '../Colored';

const initialFieldProp = { value: '', isValid: false };

export interface ResetPasswordProps extends DefaultProps {
  showError: boolean;
  onLoginClick: () => void;
  onResetClick: (email: string) => void;
}

export const ResetPassword = ({
  testId,
  showError,
  onLoginClick,
  onResetClick,
}: ResetPasswordProps) => {
  const [email, setEmail] = useState<InputFieldProps>(initialFieldProp);
  return (
    <View testID={`ResetPassword__${testId}`}>
      <Title>Reset password</Title>
      <View
        style={{
          paddingTop: 10,
          paddingBottom: 10,
        }}
      >
        <InputTextEmail
          testId={`ResetPassword__Email__${testId}`}
          value={email.value}
          setValue={(inputFieldProps) => setEmail(inputFieldProps)}
        />
      </View>
      {showError && (
        <ParagraphColored
          testId={`ResetPassword__Error__${testId}`}
          type={'error'}
          content={'Something went wrong, please try again later'}
        />
      )}
      <Button
        testID={`ResetPassword__Submit__${testId}`}
        mode="contained"
        disabled={!email.isValid}
        onPress={() => {
          console.log('clicked on submit');
          onResetClick(email.value);
        }}
      >
        RESET PASSWORD
      </Button>
      {/*@ts-ignore*/}
      <View style={Styles.row}>
        <TouchableOpacity
          testID={`ResetPassword__Login__${testId}`}
          onPress={onLoginClick}
        >
          <Subheading>← Back to login</Subheading>
        </TouchableOpacity>
      </View>
    </View>
  );
};
