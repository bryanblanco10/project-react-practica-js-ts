import { FormComponent } from '@/models';
import { validationText } from '@/utils';
import { ErrorMessage } from '@hookform/error-message';
import { Input } from '@material-tailwind/react';
import { MessageError } from '..';

interface Props extends FormComponent {
	textTransform?: boolean;
}

export const InputTextComponent = ({
	label,
	required,
	name: nameField,
	register,
	errors,
	isDisabled,
	textTransform,
}: Props) => {
	const requiredField = required ? validationText : undefined;
	const { name, onBlur, onChange, ref } = register(nameField, requiredField);
	return (
		<div>
			<label className='!text-base'>{label}</label>
			<Input
				label={label}
				name={name}
				onBlur={onBlur}
				onChange={onChange}
				inputRef={ref}
				disabled={isDisabled}
				className={`${textTransform ? 'uppercase' : ''} !border bg-white text-gray-900 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 ${
					errors[name] ? '!border-red-300' : '!border-gray-500'
				}`}
				labelProps={{
					className: 'hidden',
				}}
				placeholder={label}
				size='lg'
			/>
			<ErrorMessage
				errors={errors}
				name={name}
				render={({ message }) => <MessageError>{message}</MessageError>}
			/>
		</div>
	);
};
