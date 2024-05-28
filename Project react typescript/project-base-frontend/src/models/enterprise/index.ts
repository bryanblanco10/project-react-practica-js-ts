export interface CreateEnterprise {
  uuid?: string;
	cellphone: string;
	name: string;
	nit: string;
	address: string;
	neighborhood: string;
	municipalityUuid: string;
	departmentUuid: string;
  status?: boolean | string;
}