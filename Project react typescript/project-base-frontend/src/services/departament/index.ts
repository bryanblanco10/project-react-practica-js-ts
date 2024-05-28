import { axios, API_ROUTES } from '@/config/index.js';

export const getAllDepartaments = async () => {
	const { data } = await axios.get(`${API_ROUTES?.department?.get}`);

	return data;
};
