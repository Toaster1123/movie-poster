import { create } from 'zustand';
interface State {
  regOpened: boolean;
  setRegOpened: (state: boolean) => void;
}
export const RegisterPopup = create<State>((set) => ({
  regOpened: false,
  setRegOpened: (state) => set(() => ({ regOpened: state })),
}));
