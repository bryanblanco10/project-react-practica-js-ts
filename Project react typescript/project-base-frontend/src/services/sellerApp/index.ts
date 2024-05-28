import { axios, API_ROUTES } from '@/config/index.js';
import { CreateSeller } from '@/models';

export const getAllSellerApps = async () => {
	const { data } = await axios.get(`${API_ROUTES?.sellerApp?.get}`);

	return data;
};

export const findSellerApp = async (id: string | undefined) => {
	const { data } = await axios.get(`${API_ROUTES?.sellerApp?.find}/${id}`);
	return data;
};

export const saveSellerApp = async (data: CreateSeller) => {
	const result = await axios.post(`${API_ROUTES?.sellerApp?.save}`, data);

	return result;
};

export const updateSellerApp = async ({
	uuid,
	data,
}: {
	uuid: string;
	data: CreateSeller;
}) => {
	const result = await axios.put(`${API_ROUTES?.sellerApp?.update}/${uuid}`, data);

	return result;
};
