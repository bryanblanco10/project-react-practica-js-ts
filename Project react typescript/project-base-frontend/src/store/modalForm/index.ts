import { create } from 'zustand';
interface ModalStore {
	isOpen: boolean;
	handleOpen: (isOpen: boolean) => void;
}

export const useModalFormStore = create<ModalStore>(set => ({
	isOpen: false,
	handleOpen: (isOpen: boolean) => set({ isOpen }),
}));
