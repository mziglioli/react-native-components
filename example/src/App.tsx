import React from 'react';
// @ts-ignore
import Storybook from '../storybook';
import { Provider as PaperProvider } from 'react-native-paper';

const App = () => (
  <PaperProvider>
    <Storybook />
  </PaperProvider>
);

export default App;
