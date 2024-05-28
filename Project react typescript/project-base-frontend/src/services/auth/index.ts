import { axios, API_ROUTES } from '@/config/index.js';
import { UserLogin } from '@/models';

export const login = async (user: UserLogin) => {
	const { data } = await axios.post(`${API_ROUTES?.auth?.login}`, user);

	return data;
};

export const logoutService = async (user: { username: string }) => {
	const { data } = await axios.post(`${API_ROUTES?.auth?.logout}`, user);

	return data;
};

export const recoveryPassword = async (user: { email: string }) => {
	const { data } = await axios.post(`${API_ROUTES?.auth?.recovery}`, user);

	return data;
};

export const changePassword = async (user: UserLogin) => {
	const { data } = await axios.post(`${API_ROUTES?.auth?.change}`, user);

	return data;
};

export const changePasswordFistSession = async (user: UserLogin) => {
	const { data } = await axios.post(`${API_ROUTES?.auth?.changeFirst}`, user);

	return data;
};
