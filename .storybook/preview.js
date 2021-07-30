import React from 'react';
import { addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {
  Provider as PaperProvider,
} from 'react-native-paper';

addDecorator(withKnobs);
addDecorator((Story) => (
  <PaperProvider>
    <SafeAreaProvider>
      {Story()}
    </SafeAreaProvider>
  </PaperProvider>
),)
