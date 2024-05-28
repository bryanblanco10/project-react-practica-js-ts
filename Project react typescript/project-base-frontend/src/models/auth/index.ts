export interface User {
	fullname: string;
	username: string;
	uuid: string;
	isFisrtSession: boolean;
	isModal: boolean;
	enterprise: {
		modules: string;
		name: string;
		uuid: string;
	} | null;
	profile?: {
		name: string;
		uuid: string;
	},
	modules: Module[];
	dataSms?: DataSms | null
}
export interface CreateUser {
	names: string;
	email: string;
	cellphone?: string;
	password: string;
}

export interface UserLogin {
	username: string;
	password: string;
}

export interface Module {
  moduleUuid: string,
  permission: string[];
}

export interface DataSms {
  names: string
  enterprise: string
  final_date: string
  currentDate: string
  namePlan: string
  price: number
  percentage: number
  discount: number
  total: number
}
