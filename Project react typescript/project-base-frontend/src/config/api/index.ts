import { ApiRoutes } from '@/models';

export const API_URL = import.meta.env.VITE_API_URL;

export const API_ROUTES: ApiRoutes = {
	auth: {
		login: `${API_URL}/api/auth/login`,
		logout: `${API_URL}/api/auth/logout`,
		recovery: `${API_URL}/api/auth/recovery-password`,
    change: `${API_URL}/api/auth/change-password`,
    changeFirst: `${API_URL}/api/auth/change-password-first-session`,
	},
	profile: {
		get: `${API_URL}/api/profile`,
	},
	module: {
		get: `${API_URL}/api/module`,
	},
	owner: {
		get: `${API_URL}/api/owner`,
		find: `${API_URL}/api/owner`,
		save: `${API_URL}/api/auth/register`,
		update: `${API_URL}/api/owner`,
	},
	ownerSeller: {
		get: `${API_URL}/api/owner/owner-seller`,
	},
	myEnterprise: {
		find: `${API_URL}/api/my-enterprise`,
		update: `${API_URL}/api/my-enterprise`,
	},
	municipality: {
		get	: `${API_URL}/api/geography/municipalities`,
	},
	department: {
		get	: `${API_URL}/api/geography/departments`,
	},
	plan: {
		get	: `${API_URL}/api/plan-enterprise-price`,
	},
	employee: {
		get: `${API_URL}/api/employee/employees-enterprises`,
		find: `${API_URL}/api/employee`,
		save: `${API_URL}/api/employee`,
		update: `${API_URL}/api/employee`,
		delete: `${API_URL}/api/employee`,
	},
	sellerApp: {
		get: `${API_URL}/api/seller-app`,
		find: `${API_URL}/api/seller-app`,
		save: `${API_URL}/api/seller-app`,
		update: `${API_URL}/api/seller-app`,
		delete: `${API_URL}/api/seller-app`,
	},
	enterprise: {
		get: `${API_URL}/api/enterprise`,
		find: `${API_URL}/api/enterprise`,
		update: `${API_URL}/api/enterprise`,
		delete: `${API_URL}/api/enterprise`,
	},
	enterpriseSeller: {
		get: `${API_URL}/api/enterprise/enterprise-seller`,
	},
	payment: {
		get: `${API_URL}/api/history-plan/history-plan-enterprise`,
		get2: `${API_URL}/api/history-plan/history-plan-by-enterprise`,
		find: `${API_URL}/api/history-plan`,
		save: `${API_URL}/api/history-plan`,
		update: `${API_URL}/api/history-plan`,
	}
};
