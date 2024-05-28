import { axios, API_ROUTES } from '@/config/index.js';
import { CreateEnterprise } from '@/models';

export const getAllEnterprise = async () => {
	const { data } = await axios.get(`${API_ROUTES?.enterprise?.get}`);

	return data;
};

export const getAllEnterpriseSeller = async () => {
	const { data } = await axios.get(`${API_ROUTES?.enterpriseSeller?.get}`);

	return data;
};

export const findEnterprise = async (id: string | undefined) => {
	const { data } = await axios.get(`${API_ROUTES?.enterprise?.find}/${id}`);
	return data;
};

export const updateEnterprise = async ({
	uuid,
	data,
}: {
	uuid: string;
	data: CreateEnterprise;
}) => {
	const result = await axios.put(`${API_ROUTES?.enterprise?.update}/${uuid}`, data);

	return result;
};
