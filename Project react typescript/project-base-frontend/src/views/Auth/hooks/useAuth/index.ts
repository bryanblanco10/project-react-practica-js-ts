import { logoutService } from '@/services';
import { useAuthStore, useModalsStore } from '@/store';
import { notifyError } from '@/utils';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

interface Error {
	data: {
		message: string;
	};
}
export const useAuth = () => {
	const { isAuthenticate, setLogin, setLogout, user, accessToken } =
		useAuthStore();
	const { handleOpenModalSessionFinish, handleOpenModalExpiredToken } =
		useModalsStore();
	const navigate = useNavigate();

	const { mutate, isLoading, isSuccess } = useMutation(logoutService, {
		onSuccess: () => {
			setLogout();
			handleOpenModalSessionFinish(false);
			handleOpenModalExpiredToken(false);
			navigate('/iniciar-sesion');
		},
		onError: (error: Error) => {
			const data = error?.data;
			notifyError(data?.message);
		},
	});

	return {
		isAuthenticate,
		setLogin,
		logout: mutate,
		user,
		accessToken,
		isLoading,
		isSuccess,
	};
};
