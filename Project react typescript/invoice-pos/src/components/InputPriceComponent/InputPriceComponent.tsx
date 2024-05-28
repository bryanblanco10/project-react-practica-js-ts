import { FormComponent } from '@/models';
import { formatNumber } from '@/utils';
import { ErrorMessage } from '@hookform/error-message';
import { Input } from '@material-tailwind/react';
import { UseFormSetValue } from 'react-hook-form';
import { MessageError } from '..';

interface Props extends FormComponent {
	setValue: UseFormSetValue<any>;
}
export const InputPriceComponent = ({
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

	const formatPrice = (event: any): void => {
		setValue(nameField, formatNumber(event.target.value), {
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
				onKeyUp={formatPrice}
				inputRef={ref}
				error={!!errors[name]}
				disabled={isDisabled}
				placeholder={label}
				className={`!border bg-white text-gray-900 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 ${
					errors[name] ? '!border-red-300' : '!border-gray-500'
				}`}
				labelProps={{
					className: 'hidden',
				}}
				size='lg'
				crossOrigin={undefined}
			/>
			<ErrorMessage
				errors={errors}
				name={name}
				render={({ message }) => <MessageError>{message}</MessageError>}
			/>
		</div>
	);
};
