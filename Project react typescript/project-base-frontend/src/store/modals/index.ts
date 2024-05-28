import { create } from 'zustand';
interface ModalsStore {
	isOpenModalSessionFinish: boolean;
	handleOpenModalSessionFinish: (isOpenModalSessionFinish: boolean) => void;
	isOpenModalExpiredToken: boolean;
	handleOpenModalExpiredToken: (isOpenModalExpiredToken: boolean) => void;
}

export const useModalsStore = create<ModalsStore>(set => ({
	isOpenModalSessionFinish: false,
	isOpenModalExpiredToken: false,
	handleOpenModalSessionFinish: (isOpenModalSessionFinish: boolean) => set({ isOpenModalSessionFinish }),
	handleOpenModalExpiredToken: (isOpenModalExpiredToken: boolean) => set({ isOpenModalExpiredToken }),
}));
