import { create } from 'zustand';
import { SelectedSeatType } from '../../@types';

interface Types {
  openModal: boolean;
  setOpenModal: (value: boolean) => void;
}

export const authModalState = create<Types>((set) => ({
  openModal: false,
  setOpenModal: (value) => set({ openModal: value }),
}));
