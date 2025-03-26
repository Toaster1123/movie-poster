import { create } from 'zustand';
import { SelectedSeatType } from '../../@types';

interface TicketsType {
  selectedSeat: SelectedSeatType[];
  setSelectedSeats: (seat: SelectedSeatType) => void;
  removeSelectedSeats: (seat: number) => void;
  clearTicketSits: () => void;
}

export const changeUserTickets = create<TicketsType>((set) => ({
  selectedSeat: [],
  setSelectedSeats: (seat) =>
    set((prev) => ({
      selectedSeat: [...prev.selectedSeat, seat],
    })),
  removeSelectedSeats: (index) =>
    set((prev) => ({
      selectedSeat: prev.selectedSeat.filter((_, id) => id !== index),
    })),
  clearTicketSits: () => set({ selectedSeat: [] }),
}));
