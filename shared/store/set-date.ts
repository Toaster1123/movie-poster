import { create } from 'zustand';
interface State {
  date: number;
  setNewDate: (state: number) => void;
}
export const ChangeTicketsData = create<State>((set) => ({
  date: new Date().getHours() * 60 + new Date().getMinutes(),
  // date: 1400,
  setNewDate: (state) => set(() => ({ date: state })),
}));
