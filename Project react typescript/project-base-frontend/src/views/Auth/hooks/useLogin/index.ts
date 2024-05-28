import { login } from '@/services';
import { useAuthStore } from '@/store';
import { notifyError } from '@/utils';
import { useMutation } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../useAuth';
interface Error {
	data: {
		message: string;
	};
}

interface FormLogin {
	username: string;
	password: string;
}

export const useLogin = () => {
	const [openModal, setOpenModal] = useState<boolean>(false);
	const [dataSend, setDataSend] = useState<FormLogin>({ username: '', password: '' });
	const navigate = useNavigate();
	const { setLogin } = useAuthStore();
	const { logout, isSuccess } = useAuth();

	const { mutate, isLoading } = useMutation(login, {
		onSuccess: data => {
			setLogin({ ...data?.user }, true, data?.token);
			navigate('/');
		},
		onError: (error: Error) => {
			const data = error?.data;
			if (data?.message === "Session active") {
				handleModal(true);
			} else  {
				notifyError(data?.message);
			}
		},
	});

	const handleModal = (value : boolean) => {
		setOpenModal(value);
	};

	const handleLogout = () => {
		logout({ username: dataSend.username });
		handleModal(false);
	}

	const updateDataSend = (data: FormLogin) => {
		setDataSend(data);
	}

	useEffect(() => {
		if (isSuccess) {
			mutate(dataSend);
		}
	}, [isSuccess])
	
	return {
		mutate,
		handleLogout,
		handleModal,
		updateDataSend,
		isLoading,
		openModal,
	};
};
