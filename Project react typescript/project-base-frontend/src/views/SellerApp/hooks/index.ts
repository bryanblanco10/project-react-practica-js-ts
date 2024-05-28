import {
	findSellerApp,
	getAllSellerApps,
	saveSellerApp,
	updateSellerApp,
} from '@/services';
import { notifyError, notifySuccess } from '@/utils';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Error } from '@/models';
import { useValidationStatusError } from '@/hooks';

const key = 'sellers';
const key1 = 'seller';

export const useSellerApps = () => {
	const { validationStatusError } = useValidationStatusError();
	const {
		data: records,
		isLoading,
		isError,
		error,
	} = useQuery([key], getAllSellerApps);

	useEffect(() => {
		if (isError && error) {
			const { data } = error as Error;
			validationStatusError(data.status);
		}
	}, [error]);

	return {
		records,
		isLoading,
	};
};

export const useCreateSellerApp = () => {
	const navigate = useNavigate();
	const { validationStatusError } = useValidationStatusError();
	const { mutate, isLoading } = useMutation(saveSellerApp, {
		onSuccess: () => {
			notifySuccess('Registro creado con exito');
			navigate('/vendedores-app');
		},
		onError: (error: Error) => {
			const data = error?.data;
			validationStatusError(data.status);
			notifyError(data?.message);
		},
	});
	return {
		mutateCreate: mutate,
		isLoading,
	};
};

export const useDetailSellerApp = ({ uuid }: { uuid: string | undefined }) => {
	let seller = null;
	const { validationStatusError } = useValidationStatusError();
	const { data, refetch, isInitialLoading, remove, isError, error } = useQuery(
		[key1, uuid],
		() => findSellerApp(uuid),
		{
			enabled: false,
			refetchOnWindowFocus: false,
		}
	);

	useMemo(() => {
		if (uuid !== undefined) {
			refetch();
		}
		return () => remove();
	}, [uuid]);

	if (data) {
		seller = {
			...data,
			status: data?.status ? '1' : '2',
		};
	}

	useEffect(() => {
		if (isError && error) {
			const { data } = error as Error;
			validationStatusError(data.status);
		}
	}, [error]);

	return {
		isInitialLoadingDetail: isInitialLoading,
		seller,
	};
};

export const useUpdateSellerApp = () => {
	const navigate = useNavigate();
	const { validationStatusError } = useValidationStatusError();
	const { mutate, isLoading } = useMutation(updateSellerApp, {
		onSuccess: () => {
			notifySuccess('Registro actualizado con exito');
			navigate('/vendedores-app');
		},
		onError: (error: Error) => {
			const data = error?.data;
			validationStatusError(data.status);
			notifyError(data?.message);
		},
	});
	return {
		mutateUpdate: mutate,
		isLoadingUpdate: isLoading,
	};
};
