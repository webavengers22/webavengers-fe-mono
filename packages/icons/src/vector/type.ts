import { ReactNode } from 'react';
import { solidIconList } from './SolidIconPath';
import { fillIconList } from './FillIconPath';

export interface IconList {
  [key: string]: ReactNode;
}

export type SolidIconType = keyof typeof solidIconList;

export type FillIconType = keyof typeof fillIconList;
