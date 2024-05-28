import { FormComponent } from '@/models';
import { validationText } from '@/utils';
import { ErrorMessage } from '@hookform/error-message';
import Select from 'react-select';
import { MessageError } from '../MessageError';
import { UseFormSetValue } from 'react-hook-form';

interface Props extends FormComponent {
	options: any[];
	value?: string[];
	isLoading?: boolean;
	setValue: UseFormSetValue<any>;
}
export const SelectMultipleComponent = ({
	label,
	options,
	required,
	name: nameField,
	errors,
	isDisabled,
	value,
	isLoading,
	register,
	setValue,
}: Props) => {
	const requiredField = required ? validationText : undefined;
	const { name, ref, onBlur } = register(nameField, requiredField);

	const handleChange = (val: any) => {
		setValue(nameField, val, { shouldValidate: true });
	};

	return (
		<div>
			<label className='!text-base'>{label}</label>
			<Select
				name={name}
				placeholder='Seleccione...'
				ref={ref}
				options={options}
				isDisabled={isDisabled}
				isLoading={isLoading}
				onChange={handleChange}
				value={value}
				onBlur={onBlur}
				isMulti
			/>
			<ErrorMessage
				errors={errors}
				name={name}
				render={({ message }) => <MessageError>{message}</MessageError>}
			/>
		</div>
	);
};
