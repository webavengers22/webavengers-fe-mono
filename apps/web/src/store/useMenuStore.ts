import { ReactNode } from 'react';
import { create } from 'zustand';

interface LayoutStoreState {
  oneDepthMenu: Array<{
    id: string;
    href: string;
    title: string;
    menu?: boolean;
  }>;
  twoDepthMenu: Array<{
    id: string;
    href: string;
    title: string;
    children: [];
  }>;
  setMenu: (state: Omit<LayoutStoreState, 'setMenu'>) => void;
}

const useMenuStore = create<LayoutStoreState>((set) => ({
  oneDepthMenu: [],
  twoDepthMenu: [],
  setMenu: (args) => set(args),
}));

export default useMenuStore;
