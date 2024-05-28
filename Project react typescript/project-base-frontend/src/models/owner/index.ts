export interface CreateOwner {
	uuid?: string | undefined;
	email: string;
	profileUuid: string;
	names: string;
	last_names: string;
	type_identification: string;
	identification: number | null;
	cellphone: number | null;
	cellphone_enterprise: number | null;
	name: string;
	nit: string;
	address: string;
	neighborhood: string;
	municipalityUuid: string;
	departmentUuid: string;
	initial_date: string;
	final_date: string;
	planEnterprisePriceUuid: string;
	total: string;
	discount: number;
	status?: boolean | string;
}

export interface UpdateOwner {
	uuid?: string | undefined;
	email: string;
	names: string;
	last_names: string;
	type_identification: string;
	identification: number | null;
	cellphone: number | null;
	status?: boolean | string;
	userUuid?: string;
}
