export interface MenuItem {
  label: string;
  active?: boolean;
  icon?: string;
  page: string;
}

export type MenuItems = MenuItem[];
