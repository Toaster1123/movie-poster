import { create } from 'zustand';
interface State {
  active: number;
  setActive: (state: number) => void;
}
export const activeDateSelector = create<State>((set) => ({
  active: 0,
  setActive: (state) => set(() => ({ active: state })),
}));
