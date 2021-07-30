import type { ColorType } from './colorTypes';

export interface SelectItem {
  label: string;
  value: string;
}

export type SelectItems = SelectItem[];

export interface ListItem {
  id: string;
  title: string;
  type: ColorType;
  description: string;
}
export type ListItems = ListItem[];
