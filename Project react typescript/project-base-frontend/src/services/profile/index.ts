import { axios, API_ROUTES } from '@/config/index.js';

export const getAllProfiles = async () => {
	const { data } = await axios.get(`${API_ROUTES?.profile?.get}`);

	return data;
};
