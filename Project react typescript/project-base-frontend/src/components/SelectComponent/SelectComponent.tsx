import { FormComponent } from '@/models';
import { validationText } from '@/utils';
import { ErrorMessage } from '@hookform/error-message';
import { MessageError } from '../MessageError';
import { UseFormSetValue } from 'react-hook-form';
import { useEffect } from 'react';
import Select from 'react-select';
interface Option {
	value: string | undefined | number;
	label: string;
}
interface Props extends FormComponent {
	options: any[];
	isEvent?: boolean;
	searchData?: (id: string) => void;
	setValue: UseFormSetValue<any>;
	value?: string | number;
	isLoading?: boolean;
}
export const SelectComponent = ({
	label,
	options,
	required,
	name: nameField,
	setValue,
	register,
	errors,
	isEvent,
	searchData,
	isDisabled,
	value,
	isLoading,
}: Props) => {
	const requiredField = required ? validationText : undefined;
	const { name, ref, onBlur } = register(nameField, requiredField);

	const handleChange = (val: Option) => {
		if (val.value !== '') {
			setValue(nameField, val.value, { shouldValidate: true });
			if (isEvent && searchData) {
				if (typeof val.value === 'string') searchData(val.value);
			}
		}
	};

	useEffect(() => {
		if (isEvent && value !== '') handleChange({ value, label: '' });
	}, [value]);

	// const colourStyles = {
	// 	control: (styles: any) => ({
	// 		...styles,
	// 		height: '44px',
	// 		borderWidth: '1px',
	// 		fontSize: '16px',
	// 		color: 'rgb(69 90 100 / 1)',
	// 		fontWeight: '400',
	// 		lineHeight: '1.25rem',
	// 		fontFamily: 'Roboto, sans-serif',
	// 		backgroundHolor: 'transparent',
	// 		borderRadius: '0.375rem',
	// 		borderColor: errors[name] ? '#c94343' : 'rgb(158 158 158 / 1)',
	// 	}),
	// 	singleValue: (styles: any) => ({
	// 		...styles,
	// 		backgroundColor: 'rgb(236 239 241 / 1)',
	// 	}),
	// };
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
				value={options.filter(function (option) {
					return option.value === value;
				})}
				onBlur={onBlur}
			/>
			<ErrorMessage
				errors={errors}
				name={name}
				render={({ message }) => <MessageError>{message}</MessageError>}
			/>
		</div>
	);
};
