import { SaleDetail } from '@/models';
import { create } from 'zustand';

interface ModalStore {
	isOpen: boolean;
	handleOpenPrint: (isOpen: boolean) => void;
	updateSale: (sale: SaleDetail | undefined) => void;
	updateUuid: (uuid: string | undefined) => void;
	updateIsTicket: (isModal: boolean) => void;
	uuid: string | undefined;
	isTicket: boolean;
	sale: SaleDetail | undefined;
}

export const useModalPrintStore = create<ModalStore>(set => ({
	isOpen: false,
	uuid: undefined,
	isTicket: false,
	sale: undefined,
	handleOpenPrint: (isOpen: boolean) => set({ isOpen }),
	updateUuid: (uuid: string | undefined) => {
		set({ uuid })
	},
	updateIsTicket: (isTicket: boolean) => set({ isTicket }),
	updateSale: (sale: SaleDetail | undefined) => set({ sale }),
}));
