import { CliketSitsType } from '@/@types/canvas-types';
import { create } from 'zustand';
interface TicketsType {
  cliketSits: CliketSitsType[] | [];
  setCliketSits: (newObj: CliketSitsType) => void;
}
export const UserTickets = create<TicketsType>((set) => ({
  cliketSits: [],
  setCliketSits: (newObj) =>
    set((state) => ({ ...state, cliketSits: [...state.cliketSits, newObj] })),
}));
