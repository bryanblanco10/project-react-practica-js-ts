import { API_ROUTES, axios } from '@/config/index.js';
import { CreateEnterprise } from '@/models';

export const findMyEnterprise = async () => {
	const { data } = await axios.get(`${API_ROUTES?.myEnterprise?.find}`);
	return data;
};

export const updateMyEnterprise = async ({
	uuid,
	data,
}: {
	uuid: string;
	data: CreateEnterprise;
}) => {
	const result = await axios.put(
		`${API_ROUTES?.myEnterprise?.update}/${uuid}`,
		data,
	);

	return result;
};
