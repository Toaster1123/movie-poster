import { create } from 'zustand';
import { CanvasDataType } from '../../@types/canvas-types';
interface State {
  canvasData: CanvasDataType;
  setCanvasData: (state: CanvasDataType) => void;
}
export const CanvasData = create<State>((set) => ({
  canvasData: {} as CanvasDataType,
  setCanvasData: (state: CanvasDataType) => set({ canvasData: state }),
}));
