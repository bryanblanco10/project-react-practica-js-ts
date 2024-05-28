import { axios, API_ROUTES } from '@/config/index.js';
import { CreateEmployee } from '@/models';

export const getAllEmployees = async () => {
	const { data } = await axios.get(`${API_ROUTES?.employee?.get}`);

	return data;
};

export const findEmployee = async (id: string | undefined) => {
	const { data } = await axios.get(`${API_ROUTES?.employee?.find}/${id}`);
	return data;
};

export const saveEmployee = async (data: CreateEmployee) => {
	const result = await axios.post(`${API_ROUTES?.employee?.save}`, data);

	return result;
};

export const updateEmployee = async ({
	uuid,
	data,
}: {
	uuid: string;
	data: CreateEmployee;
}) => {
	const result = await axios.put(
		`${API_ROUTES?.employee?.update}/${uuid}`,
		data,
	);

	return result;
};
