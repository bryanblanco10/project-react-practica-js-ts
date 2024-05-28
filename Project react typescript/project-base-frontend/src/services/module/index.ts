import { axios, API_ROUTES } from '@/config/index.js';

export const getAllModules = async () => {
	const { data } = await axios.get(`${API_ROUTES?.module?.get}`);

	return data;
};
