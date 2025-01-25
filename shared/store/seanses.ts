import { CardType } from '@/@types/sceance-type';
import { create } from 'zustand';
interface seanseType {
  seansesArray: CardType[] | [];
  setSeansesArray: (state: CardType[]) => void;
}
export const ChangeSeanse = create<seanseType>((set) => ({
  seansesArray: [],
  setSeansesArray: (state) => set(() => ({ seansesArray: state })),
}));
