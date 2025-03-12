import { create } from 'zustand';
import { CardType } from '../../@types/sceance-type';
interface seanseType {
  seansesArray: CardType[] | [];
  setSeansesArray: (state: CardType[]) => void;
}
export const ChangeSeanse = create<seanseType>((set) => ({
  seansesArray: [],
  setSeansesArray: (state) => set(() => ({ seansesArray: state })),
}));
