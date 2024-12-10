import { create } from 'zustand';
interface State {
  date: number;
  setNewDate: () => void;
}
export const ChangeTicketsData = create<State>((set) => ({
  date: new Date().getHours() * 60 + new Date().getMinutes(),
  setNewDate: () => set(() => ({ date: 600 })),
}));
