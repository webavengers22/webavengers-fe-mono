import { create } from 'zustand';

interface LayoutStoreState {
  collapsed: boolean;
  setCollapsed: (isCollapse: boolean) => void;
}

const useLayoutStore = create<LayoutStoreState>((set) => ({
  collapsed: true,
  setCollapsed: (isCollapsed: boolean) => set({ collapsed: isCollapsed }),
}));

export default useLayoutStore;
