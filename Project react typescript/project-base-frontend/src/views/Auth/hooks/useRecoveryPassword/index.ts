import { recoveryPassword } from '@/services';
import { notifyError } from '@/utils';
import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
interface Error {
	data: {
		message: string;
	};
}

export const useRecoveryPassword = () => {
	const [isMessage, setIsMessage] = useState<boolean>(false);
	const { mutate, isLoading } = useMutation(recoveryPassword, {
		onSuccess: () => {
			setIsMessage(true);
		},
		onError: (error: Error) => {
			const data = error?.data;
			notifyError(data?.message);
			setIsMessage(false);
		},
	});

	return {
		mutate,
		isLoading,
		isMessage,
	};
};
