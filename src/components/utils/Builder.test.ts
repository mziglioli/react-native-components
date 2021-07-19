import type { MenuItem, MenuItems } from '../../type';

export const buildItem = (
  label: string,
  icon: string,
  active: boolean
): MenuItem => {
  return {
    label: `${label} item`,
    icon: icon,
    active: active,
    onPress: () => console.log(`clicked in the ${label} item`),
  };
};

// @ts-ignore
export const buildItems = (): MenuItems => {
  return [
    buildItem('first', 'star', false),
    buildItem('second', '', false),
    buildItem('third', '', false),
  ];
};
