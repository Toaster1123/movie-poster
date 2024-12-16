import { CliketSitsType } from '@/@types/canvas-types';
import { create } from 'zustand';
interface seanseType {
  clicketSits: CliketSitsType[] | [];
  setClicketSits: (state: CliketSitsType[]) => void;
}
export const ChangeSeanse = create<seanseType>((set) => ({
  clicketSits: [],
  setClicketSits: (state) => set(() => ({ clicketSits: state })),
}));
