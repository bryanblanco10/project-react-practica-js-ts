import { User } from '@/models';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
interface AuthStore {
	user: User;
	isAuthenticate: boolean;
	setLogin: (user: User, isAuthenticate: boolean) => void;
	setLogout: () => void;
}

export const useAuthStore = create(
	persist<AuthStore>(
		set => ({
			user: {
				email: '',
				names: '',
			},
			isAuthenticate: false,
			setLogin: (user: User, isAuthenticate: boolean) => {
				set({ user });
				set({ isAuthenticate });
			},
			setLogout: () => {
				set({ user: { email: '', names: '' } });
				set({ isAuthenticate: false });
			},
		}),
		{
			name: 'stateAuth',
		},
	),
);
