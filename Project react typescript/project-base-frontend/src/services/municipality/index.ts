import { axios, API_ROUTES } from '@/config/index.js';

export const getAllMunicipalities = async (uuid: string | number) => {
	const { data } = await axios.get(`${API_ROUTES?.municipality?.get}/${uuid}`);

	return data;
};
