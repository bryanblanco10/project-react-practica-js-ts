import { findMyEnterprise, updateMyEnterprise } from '@/services';
import { notifyError, notifySuccess } from '@/utils';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { Error } from '@/models';
import { useValidationStatusError } from '@/hooks';
const key = 'enterprise';

export const useEnterprise = () => {
	let enterprise = null;
	const { validationStatusError } = useValidationStatusError();
	const { data, isLoading, isError, error } = useQuery([key], findMyEnterprise);

	if (data) {
		enterprise = {
			...data,
			nameDepartment: data?.municipality?.department?.name,
			nameMunicipality: data?.municipality?.name,
		};
	}

	useEffect(() => {
		if (isError && error) {
			const { data } = error as Error;
			validationStatusError(data.status);
		}
	}, [error]);

	return {
		enterprise,
		isLoading,
	};
};

export const useUpdateEnterprise2 = () => {
	const [checked, setCheked] = useState<boolean>(false);
	const { mutate, isLoading } = useMutation(updateMyEnterprise, {
		onSuccess: () => {
			notifySuccess('Registro guardado con exito');
			handleCheck();
		},
		onError: (error: Error) => {
			const data = error?.data;
			notifyError(data?.message);
		},
	});

	const handleCheck = () => {
		setCheked(!checked);
	};
	return {
		mutateUpdate: mutate,
		isLoadingUpdate: isLoading,
		handleCheck,
		checked,
	};
};
