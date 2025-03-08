import { create } from 'zustand';
import { setCurrenStringtTime } from '../lib';
const date = new Date();
interface State {
  currentTime: string;
  setCurrentTime: (state: string) => void;
}
export const currentTimeStore = create<State>((set) => ({
  currentTime: setCurrenStringtTime(),
  setCurrentTime: (state) => set(() => ({ currentTime: state })),
}));
