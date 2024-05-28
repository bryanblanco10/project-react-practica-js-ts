import { useValidationStatusError } from '@/hooks';
import { CreatePayment, Error } from '@/models';
import {
	findPayment,
	getAllPayments,
	savePayment,
	updatePayment,
} from '@/services';
import { formatNumber, notifyError, notifySuccess } from '@/utils';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useEffect, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const key = 'payments';
const key1 = 'payment';

export const usePayments = () => {
	const { validationStatusError } = useValidationStatusError();
	const { uuid } = useParams();

	const {
		data: records,
		isLoading,
		isError,
		error,
	} = useQuery([key, uuid], () => getAllPayments(uuid));

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

export const useCreatePayment = () => {
	const navigate = useNavigate();
	const { validationStatusError } = useValidationStatusError();
	const { uuidEnterprise } = useParams();

	const { mutate, isLoading } = useMutation(savePayment, {
		onSuccess: () => {
			notifySuccess('Registro creado con exito');
			navigate(`/historial-de-pagos/${uuidEnterprise}`);
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

export const useDetailPayment = ({ uuid }: { uuid: string | undefined }) => {
	let payment: CreatePayment | undefined = undefined;
	const { validationStatusError } = useValidationStatusError();
	const { data, refetch, isInitialLoading, remove, isError, error } = useQuery(
		[key1, uuid],
		() => findPayment(uuid),
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
			if (data && data?.status) validationStatusError(data.status);
		}
	}, [error]);

	if (data) {
		payment = {
			...data,
			status: data?.status ? '1' : '2',
			enterpriseUuid: data?.enterpriseUuid,
			total: formatNumber(data?.total + ''),
			discount: data?.discount + '',
		};
	}

	return {
		isInitialLoadingDetail: isInitialLoading,
		payment,
	};
};

export const useUpdatePayment = () => {
	const navigate = useNavigate();
	const { validationStatusError } = useValidationStatusError();
	const { uuidEnterprise } = useParams();

	const { mutate, isLoading } = useMutation(updatePayment, {
		onSuccess: () => {
			notifySuccess('Registro actualizado con exito');
			navigate(`/historial-de-pagos/${uuidEnterprise}`);
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
