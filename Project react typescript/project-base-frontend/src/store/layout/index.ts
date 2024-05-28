import { create } from 'zustand';
interface LayoutStore {
	isVisible: boolean;
	setVisible: (isVisible: boolean) => void;
}

export const useLayoutStore = create<LayoutStore>(set => ({
	isVisible: false,
	setVisible: (isVisible: boolean) => set({ isVisible }),
}));
