import { axios, API_ROUTES } from '@/config/index.js';

export const getAllPlans = async () => {
	const { data } = await axios.get(`${API_ROUTES?.plan?.get}`);

	return data;
};
