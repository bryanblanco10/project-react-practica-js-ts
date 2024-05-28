import { FormComponent } from '@/models';
import { ErrorMessage } from '@hookform/error-message';
import { Input } from '@material-tailwind/react';
import { MessageError } from '..';
import { UseFormSetValue } from 'react-hook-form';

interface Props extends FormComponent {
	setValue: UseFormSetValue<any>;
}

export const InputPercentageComponent = ({
	label,
	required,
	name: nameField,
	register,
	errors,
	isDisabled,
	setValue,
}: Props) => {
	const requiredField = required
		? {
				required: { value: true, message: 'Campo requerido' },
		}
		: {};
	const { name, onBlur, onChange, ref } = register(nameField, requiredField);

	const formatPercentage = (event: any): void => {
		const { value } = event.target;

		if (Number(value) < 1 || Number(value) > 100) {
			return setValue(nameField, '', {
				shouldValidate: false,
			});
		}
		setValue(nameField, value, {
			shouldValidate: true,
		});
	};

	return (
		<div>
			<label className='!text-base'>{label}</label>
			<Input
				label={label}
				name={name}
				onBlur={onBlur}
				onChange={onChange}
				onKeyUp={formatPercentage}
				inputRef={ref}
				error={!!errors[name]}
				disabled={isDisabled}
				className={`!border bg-white text-gray-900 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 ${
					errors[name] ? '!border-red-300' : '!border-gray-500'
				}`}
				labelProps={{
					className: 'hidden',
				}}
				size='lg'
				type='number'
			/>
			<ErrorMessage
				errors={errors}
				name={name}
				render={({ message }) => <MessageError>{message}</MessageError>}
			/>
		</div>
	);
};
