import React, { useState } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { Button, Title } from 'react-native-paper';
import { Styles } from '../../utils';
import type { DefaultProps } from '../../type';
import {
  InputFieldProps,
  InputTextName,
  InputTextEmail,
  InputTextPassword,
} from '../InputText';
import { ParagraphColored } from '../Colored';

const initialFieldProp = { value: '', isValid: false };

export interface CreateAccountProps extends DefaultProps {
  showError: boolean;
  onLoginClick: () => void;
  onSignUpClick: (name: string, email: string, password: string) => void;
}

export const CreateAccount = ({
  testId,
  showError,
  onLoginClick,
  onSignUpClick,
}: CreateAccountProps) => {
  const [name, setName] = useState<InputFieldProps>(initialFieldProp);
  const [email, setEmail] = useState<InputFieldProps>(initialFieldProp);
  const [password, setPassword] = useState<InputFieldProps>(initialFieldProp);

  return (
    <View testID={`CreateAccount__${testId}`}>
      <Title>Create an account</Title>
      <View
        style={{
          paddingTop: 10,
        }}
      >
        <InputTextName
          testId={`CreateAccount__Name__${testId}`}
          value={name.value}
          setValue={(inputFieldProps) => setName(inputFieldProps)}
        />
      </View>
      <View
        style={{
          paddingTop: 10,
        }}
      >
        <InputTextEmail
          testId={`CreateAccount__Email__${testId}`}
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
          testId={`CreateAccount__Password__${testId}`}
          value={password.value}
          setValue={(inputFieldProps) => setPassword(inputFieldProps)}
        />
      </View>
      {/*@ts-ignore*/}
      {showError && (
        <ParagraphColored
          testId={`Login__Error__${testId}`}
          type={'error'}
          content={'Something went wrong, please try again later'}
        />
      )}
      <View
        style={{
          paddingTop: 20,
        }}
      >
        <Button
          testID={`Login__Submit__${testId}`}
          mode="contained"
          disabled={!(email.isValid && password.isValid)}
          onPress={() => {
            console.log('clicked on signup');
            if (name.isValid && email.isValid && password.isValid) {
              onSignUpClick(name.value, email.value, password.value);
            }
          }}
        >
          SIGN UP
        </Button>
      </View>
      {/*@ts-ignore*/}
      <View style={Styles.row}>
        <Text>Already have an account? </Text>
        <TouchableOpacity
          testID={`CreateAccount__Login__${testId}`}
          onPress={onLoginClick}
        >
          {/*@ts-ignore*/}
          <Text style={Styles.link}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
