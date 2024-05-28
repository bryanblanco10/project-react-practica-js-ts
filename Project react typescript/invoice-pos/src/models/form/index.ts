/* eslint-disable @typescript-eslint/no-explicit-any */
import { FieldErrors, UseFormRegister } from 'react-hook-form';
interface Create {
	status: boolean;
	name: string;
	price: string;
	description: string;
	names?: string;
	lastNames?: string;
	typeIdentification?: string;
	identification?: string;
	email?: string;
	cellphone?: string;
	payment?: string;
	destination?: string;
	guide?: string;
}
export interface FormComponent {
	label?: string;
	required: boolean;
	name: keyof Create;
	register: UseFormRegister<any>;
	errors: FieldErrors<any>;
	isDisabled?: boolean;
}
