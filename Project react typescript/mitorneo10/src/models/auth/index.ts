export interface User {
	email: string;
	names?: string;
}
export interface CreateUser {
	names: string;
	email: string;
	cellphone?: string;
	password: string;
}
