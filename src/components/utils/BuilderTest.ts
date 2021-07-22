import type { MenuItem, MenuItems } from '../../type';
/* istanbul ignore file */
export const buildItem = (
  label: string,
  icon: string,
  active: boolean
): MenuItem => {
  return {
    label: `${label} item`,
    icon: icon,
    active: active,
    page: `${label}`,
  };
};

// @ts-ignore
export const buildItems = (): MenuItems => {
  return [
    buildItem('first', 'star', false),
    buildItem('second', '', false),
    buildItem('Contact', '', false),
  ];
};
