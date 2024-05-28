export interface CreateSeller {
  uuid?: string;
	email: string;
	identification: string;
	names: string;
	last_names: string;
	profileUuid: string;
	username: string;
	status?: boolean | string; 
}