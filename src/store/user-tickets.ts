import { CliketSitsType } from '@/@types/canvas-types';
import { create } from 'zustand';
interface TicketsType {
  clicketSits: CliketSitsType[] | [];
  setClicketSits: (state: CliketSitsType[]) => void;
  domClicketSits: CliketSitsType[] | [];
  setDomClicketSits: (state: CliketSitsType[]) => void;
}
export const ChangeUserTickets = create<TicketsType>((set) => ({
  clicketSits: [],
  setClicketSits: (array) => set(() => ({ clicketSits: array })),
  domClicketSits: [],
  setDomClicketSits: (array) => setTimeout(() => set(() => ({ domClicketSits: array })), 300),
}));
