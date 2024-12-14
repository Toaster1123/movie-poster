import { create } from 'zustand';
interface State {
  opened: boolean;
  setOpened: (state: boolean) => void;
}
export const HallPopup = create<State>((set) => ({
  opened: true,
  setOpened: (state) => set(() => ({ opened: state })),
}));
