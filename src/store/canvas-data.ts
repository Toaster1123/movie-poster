import { CanvasDataType } from '@/@types/canvas-types';
import { create } from 'zustand';
interface State {
  canvasData: CanvasDataType;
  setCanvasData: (state: CanvasDataType) => void;
}
export const CanvasData = create<State>((set) => ({
  canvasData: {} as CanvasDataType,
  setCanvasData: (state: CanvasDataType) => set({ canvasData: state }),
}));
