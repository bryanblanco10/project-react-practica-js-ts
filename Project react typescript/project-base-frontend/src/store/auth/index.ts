import { User } from '@/models';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
interface AuthStore {
	user: User;
	isModal: boolean;
	accessToken: null | string;
	isAuthenticate: boolean;
	setLogin: (user: User, isAuthenticate: boolean, accessToken: string) => void;
	setLogout: () => void;
	setIsModal: (isModal: boolean) => void;
}

const initialState = {
	fullname: '',
	username: '',
	uuid: '',
	enterprise: null,
	isFisrtSession: false,
	isModal: false,
	modules: []
};

export const useAuthStore = create(
	persist<AuthStore>(
		set => ({
			user: initialState,
			isAuthenticate: false,
			isModal: false,
			accessToken: null,
			setLogin: (user: User, isAuthenticate: boolean, accessToken: string) => {
				set({ user });
				set({ isAuthenticate });
				set({ accessToken });
				set({ isModal: user.isModal });
			},
			setIsModal: (isModal: boolean) => {
				set({ isModal });
			},
			setLogout: () => {
				set({ user: initialState });
				set({ isAuthenticate: false });
				set({ accessToken: null });
			},
		}),
		{
			name: 'stateAuth',
		},
	),
);
