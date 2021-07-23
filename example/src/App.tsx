import React from 'react';
// @ts-ignore
import Storybook from '../storybook';
import { ThemeProvider } from '../../src/utils/ThemeContext';
import {
  DefaultTheme as PaperDefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';

const App = () => (
  <ThemeProvider value={PaperDefaultTheme}>
    <PaperProvider>
      <Storybook />
    </PaperProvider>
  </ThemeProvider>
);

export default App;
