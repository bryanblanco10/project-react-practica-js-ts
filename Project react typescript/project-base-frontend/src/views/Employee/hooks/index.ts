import { useValidationStatusError } from '@/hooks';
import { CreateEmployee, Error } from '@/models';
import {
	findEmployee,
	getAllEmployees,
	getAllProfiles,
	saveEmployee,
	updateEmployee,
} from '@/services';
import { notifyError, notifySuccess } from '@/utils';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

const key = 'allemployees';
const key1 = 'employee';
const key2 = 'type-profile';

interface Select {
	name?: string;
	status?: boolean;
	uuid?: string;
	value?: string;
	label?: string;
	type?: string;
	price?: number;
	planEnterprise?: {
		name: string;
	};
}

export const useEmployees = () => {
	const { validationStatusError } = useValidationStatusError();
	const {
		data: records,
		isLoading,
		isError,
		error,
	} = useQuery([key], getAllEmployees);

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

export const useCreateEmployee = () => {
	const navigate = useNavigate();
	const { validationStatusError } = useValidationStatusError();
	const { mutate, isLoading } = useMutation(saveEmployee, {
		onSuccess: () => {
			notifySuccess('Registro creado con exito');
			navigate('/empleados');
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

export const useDetailEmployee = ({ uuid }: { uuid: string | undefined }) => {
	let employee: CreateEmployee | undefined = undefined;
	const { validationStatusError } = useValidationStatusError();
	const { data, refetch, isInitialLoading, remove, isError, error } = useQuery(
		[key1, uuid],
		() => findEmployee(uuid),
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
		employee = {
			...data,
			status: data?.status ? '1' : '2',
			profileUuid: data?.user?.profile?.uuid,
		};
		delete employee?.photo;
		delete employee?.phone;
		delete employee?.user;
		delete employee?.enterpriseUuid;
	}

	return {
		isInitialLoadingDetail: isInitialLoading,
		employee,
	};
};

export const useUpdateEmployee = () => {
	const navigate = useNavigate();
	const { validationStatusError } = useValidationStatusError();
	const { mutate, isLoading } = useMutation(updateEmployee, {
		onSuccess: () => {
			notifySuccess('Registro actualizado con exito');
			navigate('/empleados');
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

export const useProfiles = () => {
	const profiles: Select[] = [];
	const { validationStatusError } = useValidationStatusError();
	const { data, isError, error } = useQuery([key2], getAllProfiles, {
		refetchOnWindowFocus: false,
	});

	if (data) {
		data.forEach((item: Select) => {
			if (
				item?.uuid !== 'd3cc1602-d3a1-4a05-ac3f-a9762b17d531' &&
				item?.uuid !== 'bcaa1cc2-72f3-4183-a36b-03e4c7d845ba' &&
				item?.uuid !== 'cda783bb-338c-41b4-912b-10c3d2c247e3'
			) {
				if (item?.status)
					profiles.push({
						label: item?.name,
						value: item?.uuid,
					});
			}
		});
	}

	useEffect(() => {
		if (isError && error) {
			const { data } = error as Error;
			validationStatusError(data.status);
		}
	}, [error]);

	return {
		profiles,
	};
};
