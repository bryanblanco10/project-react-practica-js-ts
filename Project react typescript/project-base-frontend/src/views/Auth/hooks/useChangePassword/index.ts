import { changePassword, changePasswordFistSession } from '@/services';
import { useAuthStore } from '@/store';
import { notifyError, notifySuccess } from '@/utils';
import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
interface Error {
	data: {
		message: string;
	};
}

export const useChangePassword = () => {
	const navigate = useNavigate();
	const [isMessage, setIsMessage] = useState<boolean>(false);
	const { mutate, isLoading } = useMutation(changePassword, {
		onSuccess: () => {
			notifySuccess('Contraseña cambiada con exito');
			navigate('/iniciar-sesion');
		},
		onError: (error: Error) => {
			const data = error?.data;
			if (data?.message === 'No authorized') {
				setIsMessage(true);
			} else {
				notifyError(data?.message);
			}
		},
	});

	return {
		changePassword: mutate,
		isLoading,
		isMessage,
	};
};

export const useChangePasswordFistSession = () => {
	const navigate = useNavigate();
	const [isMessage, setIsMessage] = useState<boolean>(false);
	const { setLogout } = useAuthStore();
	const { mutate, isLoading } = useMutation(changePasswordFistSession, {
		onSuccess: () => {
			setLogout();
			notifySuccess('Contraseña cambiada con exito, inicia sesión de nuevo');
			navigate('/iniciar-sesion');
		},
		onError: (error: Error) => {
			const data = error?.data;
			if (data?.message === 'No authorized') {
				setIsMessage(true);
			} else {
				notifyError(data?.message);
			}
		},
	});

	return {
		changePasswordFistSession: mutate,
		isLoading2: isLoading,
		isMessage2: isMessage,
	};
};
