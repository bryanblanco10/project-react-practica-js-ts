import {
	getAllEnterprise,
	getAllEnterpriseSeller,
	findEnterprise,
	updateEnterprise,
} from '@/services';
import { useAuthStore } from '@/store';
import { notifyError, notifySuccess } from '@/utils';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Error } from '@/models';
import { useValidationStatusError } from '@/hooks';

const key = 'enterprises';
const key1 = 'enterprise';

export const useEnterprises = () => {
	const { validationStatusError } = useValidationStatusError();
	const { user } = useAuthStore();
	const getService: () => Promise<any> =
		user?.profile?.uuid === 'cda783bb-338c-41b4-912b-10c3d2c247e3'
			? getAllEnterprise
			: getAllEnterpriseSeller;

	const {
		data: records,
		isLoading,
		isError,
		error,
	} = useQuery([key], getService);

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

export const useDetailEnterprise = ({ uuid }: { uuid: string | undefined }) => {
	let enterprise = null;
	const { validationStatusError } = useValidationStatusError();
	const { data, refetch, isInitialLoading, remove, isError, error } = useQuery(
		[key1, uuid],
		() => findEnterprise(uuid),
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

	useEffect(() => {
		if (isError && error) {
			const { data } = error as Error;
			validationStatusError(data.status);
		}
	}, [error]);

	if (data) {
		enterprise = {
			...data,
			status: data?.status ? '1' : '2',
			municipalityUuid: data?.municipality?.uuid,
			departmentUuid: data?.municipality?.department?.uuid,
		};

		delete enterprise.municipality;
	}

	return {
		isInitialLoadingDetail: isInitialLoading,
		enterprise,
	};
};

export const useUpdateEnterprise = () => {
	const navigate = useNavigate();
	const { validationStatusError } = useValidationStatusError();
	const { mutate, isLoading } = useMutation(updateEnterprise, {
		onSuccess: () => {
			notifySuccess('Registro actualizado con exito');
			navigate('/empresas');
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
