import { getAllPaymentsByEnterprise } from '@/services';
import { useQuery } from '@tanstack/react-query';
import { Error } from '@/models';
import { useValidationStatusError } from '@/hooks';
import { useEffect } from 'react';

const key = 'payments-all';

export const useAllPaymentsByEnterprise = () => {
	const { validationStatusError } = useValidationStatusError();
	const {
		data: records,
		isLoading,
		isError,
		error,
	} = useQuery([key], () => getAllPaymentsByEnterprise());

	useEffect(() => {
		if (isError && error) {
			const { data } = error as Error;
			if (data && data?.status) validationStatusError(data.status);
		}
	}, [error]);

	return {
		records,
		isLoading,
	};
};
