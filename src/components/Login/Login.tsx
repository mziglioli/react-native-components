import React, { useState } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { Button, Title } from 'react-native-paper';
import { Styles } from '../../utils';
import type { DefaultProps } from '../../type';
import {
  InputFieldProps,
  InputTextEmail,
  InputTextPassword,
} from '../InputText';
import { ParagraphColored } from '../Colored';

const initialFieldProp = { value: '', isValid: false };

export interface LoginProps extends DefaultProps {
  showError: boolean;
  onLoginClick: (email: string, password: string) => void;
  onSignUpClick: () => void;
  onForgotPasswordClick: () => void;
}

export const Login = ({
  testId,
  showError,
  onLoginClick,
  onSignUpClick,
  onForgotPasswordClick,
}: LoginProps) => {
  const [email, setEmail] = useState<InputFieldProps>(initialFieldProp);
  const [password, setPassword] = useState<InputFieldProps>(initialFieldProp);

  return (
    <View testID={`Login__${testId}`}>
      <Title>Welcome back</Title>
      <View
        style={{
          paddingTop: 10,
        }}
      >
        <InputTextEmail
          testId={`Login__Email__${testId}`}
          value={email.value}
          setValue={(inputFieldProps) => setEmail(inputFieldProps)}
        />
      </View>
      <View
        style={{
          paddingTop: 10,
        }}
      >
        <InputTextPassword
          testId={`Login__Password__${testId}`}
          value={password.value}
          setValue={(inputFieldProps) => setPassword(inputFieldProps)}
        />
      </View>
      {/*@ts-ignore*/}
      <View style={Styles.forgotPassword}>
        <TouchableOpacity
          testID={`Login__ForgotPassword__${testId}`}
          onPress={onForgotPasswordClick}
        >
          <Text>Forgot your password?</Text>
        </TouchableOpacity>
      </View>
      {showError && (
        <ParagraphColored
          testId={`Login__Error__${testId}`}
          type={'error'}
          content={'Something went wrong, please try again later'}
        />
      )}
      <Button
        testID={`Login__Submit__${testId}`}
        mode="contained"
        disabled={!(email.isValid && password.isValid)}
        onPress={() => {
          console.log('clicked on submit');
          onLoginClick(email.value, password.value);
        }}
      >
        LOGIN
      </Button>
      {/*@ts-ignore*/}
      <View style={Styles.row}>
        <Text>Don’t have an account? </Text>
        <TouchableOpacity
          testID={`Login__Signup__${testId}`}
          onPress={onSignUpClick}
        >
          {/*@ts-ignore*/}
          <Text style={Styles.link}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
