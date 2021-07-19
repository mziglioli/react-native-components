export interface MenuItem {
  label: string;
  active?: boolean;
  icon?: string;
  onPress: () => void;
}

export type MenuItems = MenuItem[];
