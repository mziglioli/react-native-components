import type { ColorType } from '../type';
import type { IconSource } from 'react-native-paper/lib/typescript/components/Icon';

const parseColor = (type: ColorType): string => {
  if (type === 'warn') {
    return 'orange';
  } else if (type === 'error') {
    return 'red';
  } else if (type === 'info') {
    return 'royalblue';
  } else if (type === 'success') {
    return 'green';
  }
  return 'black';
};

const parseIconColor = (type: ColorType): IconSource => {
  if (type === 'warn') {
    return 'alert';
  } else if (type === 'error') {
    return 'alert-circle';
  } else if (type === 'info') {
    return 'help-circle';
  }
  return 'check-circle';
};

export { parseColor, parseIconColor };
