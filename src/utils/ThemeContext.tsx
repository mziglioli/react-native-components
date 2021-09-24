/* istanbul ignore file */
import React, { createContext, FC, useContext, useReducer } from 'react';

const ThemeContext = createContext({});

interface ThemeProviderProps {
  children: React.ReactElement;
  value: any;
}

const themeReducer = (state: any, action: { type: string; payload: any }) => {
  console.log('themeReducer: before', state);
  const result = {
    ...state,
    ...action.payload,
  };
  console.log('themeReducer: after', result);
  return result;
};

const useTheme = () => {
  // @ts-ignore
  const { state, dispatch } = useContext(ThemeContext);
  const actions = {
    modify: (data: any) => {
      dispatch({
        type: 'modify',
        payload: data,
      });
    },
  };
  return {
    theme: state,
    actions,
  };
};

const ThemeProvider: FC<ThemeProviderProps> = ({ children, value }) => {
  const [state, dispatch] = useReducer(themeReducer, value);
  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, useTheme };
