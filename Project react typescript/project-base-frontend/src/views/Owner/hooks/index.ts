import { useValidationStatusError } from '@/hooks';
import {
	findOwner,
	getAllDepartaments,
	getAllMunicipalities,
	getAllOwner,
	getAllOwnerSeller,
	getAllPlans,
	getAllProfiles,
	saveOwner,
	updateOwner,
} from '@/services';
import { useAuthStore } from '@/store';
import { formatNumber, formatPrice, notifyError, notifySuccess } from '@/utils';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Error } from '@/models';

const key = 'owners';
const key1 = 'owner';
const key3 = 'profiles';
const key4 = 'departments';
const key5 = 'municipalities';
const key6 = 'plans';

interface Select {
	name?: string;
	status?: boolean;
	uuid?: string;
	value?: string;
	label?: string;
	type?: string;
	price?: number | string | null;
	planEnterprise?: {
		name: string;
	};
}

export interface Module {
	module: string;
	name: string;
	path: string | null;
	status: boolean;
	uuid: string;
}

export const useOwners = () => {
	const { user } = useAuthStore();
	const { validationStatusError } = useValidationStatusError();
	const getService: () => Promise<any> =
		user?.profile?.uuid === 'cda783bb-338c-41b4-912b-10c3d2c247e3'
			? getAllOwner
			: getAllOwnerSeller;
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

export const useCreateOwner = () => {
	const navigate = useNavigate();
	const { validationStatusError } = useValidationStatusError();
	const { mutate, isLoading } = useMutation(saveOwner, {
		onSuccess: () => {
			notifySuccess('Registro creado con exito');
			navigate('/propietarios');
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

export const useDetailOwner = ({ uuid }: { uuid: string | undefined }) => {
	let owner = null;
	const { validationStatusError } = useValidationStatusError();
	const { data, refetch, isInitialLoading, remove, isError, error } = useQuery(
		[key1, uuid],
		() => findOwner(uuid),
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
		owner = {
			...data,
			status: data?.status ? '1' : '2',
		};
		delete owner.gender;
		delete owner.address;
	}

	useEffect(() => {
		if (isError && error) {
			const { data } = error as Error;
			validationStatusError(data.status);
		}
	}, [error]);

	return {
		isInitialLoadingDetail: isInitialLoading,
		owner,
	};
};

export const useUpdateOwner = () => {
	const navigate = useNavigate();
	const { validationStatusError } = useValidationStatusError();
	const { mutate, isLoading } = useMutation(updateOwner, {
		onSuccess: () => {
			notifySuccess('Registro actualizado con exito');
			navigate('/propietarios');
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

export const useAllProfiles = () => {
	const profiles: Select[] = [];
	const { validationStatusError } = useValidationStatusError();
	const { data, isError, error } = useQuery([key3], getAllProfiles, {
		refetchOnWindowFocus: false,
	});

	if (data) {
		data.forEach((item: Select) => {
			if (item?.status)
				profiles.push({
					label: item?.name,
					value: item?.uuid,
				});
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

export const useAllDepartments = () => {
	const departaments: Select[] = [];
	const { validationStatusError } = useValidationStatusError();
	const { data, isError, error } = useQuery([key4], getAllDepartaments, {
		refetchOnWindowFocus: false,
	});

	if (data) {
		data.forEach((item: Select) => {
			if (item?.status)
				departaments.push({
					label: item?.name,
					value: item?.uuid,
				});
		});
	}

	useEffect(() => {
		if (isError && error) {
			const { data } = error as Error;
			validationStatusError(data.status);
		}
	}, [error]);

	return {
		departaments,
	};
};

export const useAllMunicipalities = () => {
	const municipalities: Select[] = [];
	const { validationStatusError } = useValidationStatusError();
	const [uuid, setUuid] = useState<string | number>('');

	const { data, refetch, isSuccess, isError, error } = useQuery(
		[key5, uuid],
		() => getAllMunicipalities(uuid),
		{ enabled: false, refetchOnWindowFocus: false }
	);

	useEffect(() => {
		if (uuid !== '') {
			refetch();
		}
	}, [uuid]);

	if (data) {
		data.forEach((item: Select) => {
			if (item?.status)
				municipalities.push({
					label: item?.name,
					value: item?.uuid,
				});
		});
	}

	useEffect(() => {
		if (isError && error) {
			const { data } = error as Error;
			validationStatusError(data.status);
		}
	}, [error]);

	return {
		municipalities,
		loadMunicipalities: setUuid,
		isSuccessMunicipalities: isSuccess,
	};
};

export const useAllPlans = () => {
	const plans: Select[] = [];
	const { validationStatusError } = useValidationStatusError();
	const { data, isError, error } = useQuery([key6], getAllPlans, {
		refetchOnWindowFocus: false,
	});

	if (data) {
		data.sort((a: { price: number }, b: { price: number }) => {
			if (a.price > b.price) {
				return 1;
			}
			if (a.price < b.price) {
				return -1;
			}
			return 0;
		});

		data.forEach((item: Select) => {
			const price = formatNumber(item?.price + '');
			plans.push({
				label: `${item?.planEnterprise?.name} - ${item?.type} - ${formatPrice(
					item?.price + ''
				)}`,
				type: item?.type,
				value: item?.uuid,
				price: price,
			});
		});
	}

	useEffect(() => {
		if (isError && error) {
			const { data } = error as Error;
			validationStatusError(data.status);
		}
	}, [error]);

	return {
		plans,
	};
};
