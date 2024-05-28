import { FieldErrors, UseFormRegister } from 'react-hook-form';
interface Create {
	status: boolean;
	name: string;
	price: string;
	description: string;
	names?: string;
	identification?: string;
	email?: string;
	cellphone?: string;
	profileUuid?: string;
	enterpriseName?: string;
	gender?: string;
	percentage: string;
	last_names: string;
	type_identification: string;
	departmentUuid: string;
	municipalityUuid: string;
	planEnterprisePriceUuid: string;
	cellphone_enterprise: string;
	nit: string;
	address: string;
	initial_date: string;
	final_date: string;
	total: string;
	discount: number;
	rateUuid: string;
	placa: string;
	typeVehicleUuid: string;
	name_client: string;
	cellphone_client: string;
	model: string | null;
  brand: string | null;
	sale_price: string;
  enterpriseUuid: string
  typeVehicle: string
  dateTimeEntry: string
  dateTimeDeparture: string | null
  ratePrice: string
  dataTime: string | null
  typeRate: string
  fraction: number
  isFraction: boolean
  payment_method: string | null
  priceFraction: string
	typeRateUuid: string
	username: string
	neighborhood: string;
	nameDepartment: string;
	nameMunicipality: string;
}
export interface FormComponent {
	label?: string;
	required: boolean;
	name: keyof Create;
	register: UseFormRegister<any>;
	errors: FieldErrors<any>;
	isDisabled?: boolean;
}
