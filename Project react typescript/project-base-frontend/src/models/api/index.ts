export interface ApiRoutes {
	auth?: {
		login: string;
		logout?: string;
		recovery?: string;
		change?: string;
		changeFirst?: string;
	};
	profile?: {
		get: string;
	};
	module?: {
		get: string;
	};
	owner?: {
		get: string;
		find: string;
		save: string;
		update: string;
	};
	ownerSeller?: {
		get: string;
	},
	employee?: {
		get: string;
		find: string;
		save: string;
		update: string;
		delete: string;
	};
	myEnterprise?: {
		find: string;
		update: string;
	};
	municipality?: {
		get: string;
	};
	department?: {
		get: string;
	};
	plan?: {
		get: string;
	};
	indicator?: {
		get: string;
	};
	sale?: {
		get: string;
		find: string;
		delete: string;
	};
	sellerApp?: {
		get: string;
		find: string;
		save: string;
		update: string;
		delete: string;
	};
	enterprise?: {
		get: string;
		find: string;
		update: string;
		delete: string;
	};
	enterpriseSeller?: {
		get: string;
	};
	payment?: {
		get: string;
		get2: string;
		save: string;
		find: string;
		update: string;
	};
}
