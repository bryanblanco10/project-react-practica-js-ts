import { axios, API_ROUTES } from '@/config/index.js';
import { CreateOwner, UpdateOwner } from '@/models';

export const getAllOwner = async () => {
	const { data } = await axios.get(`${API_ROUTES?.owner?.get}`);

	return data;
};

export const getAllOwnerSeller = async () => {
	const { data } = await axios.get(`${API_ROUTES?.ownerSeller?.get}`);

	return data;
};

export const findOwner = async (id: string | undefined) => {
	const { data } = await axios.get(`${API_ROUTES?.owner?.find}/${id}`);
	return data;
};

export const saveOwner = async (data: CreateOwner) => {
	const result = await axios.post(`${API_ROUTES?.owner?.save}`, data);

	return result;
};

export const updateOwner = async ({
	uuid,
	data,
}: {
	uuid: string;
	data: UpdateOwner;
}) => {
	const result = await axios.put(`${API_ROUTES?.owner?.update}/${uuid}`, data);

	return result;
};
