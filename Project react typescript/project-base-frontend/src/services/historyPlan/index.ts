import { axios, API_ROUTES } from '@/config/index.js';
import { CreatePayment } from '@/models';

export const getAllPayments = async (uuid: string | undefined) => {
	const { data } = await axios.get(`${API_ROUTES?.payment?.get}/${uuid}`);

	return data;
};

export const getAllPaymentsByEnterprise = async () => {
	const { data } = await axios.get(`${API_ROUTES?.payment?.get2}`);
	return data;
}

export const findPayment = async (id: string | undefined) => {
	const { data } = await axios.get(`${API_ROUTES?.payment?.find}/${id}`);
	return data;
};

export const savePayment = async (data: CreatePayment) => {
	const result = await axios.post(`${API_ROUTES?.payment?.save}`, data);

	return result;
};

export const updatePayment = async ({
	uuid,
	data,
}: {
	uuid: string;
	data: CreatePayment;
}) => {
	const result = await axios.put(
		`${API_ROUTES?.payment?.update}/${uuid}`,
		data,
	);

	return result;
};
