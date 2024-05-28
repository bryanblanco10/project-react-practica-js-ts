import { FormComponent } from '@/models';
import { validationText } from '@/utils';
import { ErrorMessage } from '@hookform/error-message';
import { Textarea } from '@material-tailwind/react';
import { useEffect } from 'react';
import { MessageError } from '..';

interface Props extends FormComponent {
	value?: string;
}

export const TextAreaComponent = ({
	label,
	required,
	name: nameField,
	register,
	errors,
	isDisabled,
	value,
}: Props) => {
	const requiredField = required ? validationText : undefined;
	const { name, onBlur, onChange, ref } = register(nameField, requiredField);

	const changeValue = () => {
		const textarea: HTMLElement | null = document.getElementById('description');
		if (textarea instanceof HTMLElement) {
			textarea.style.height = `${textarea.scrollHeight}px`;
		}
	};

	useEffect(() => {
		if (value !== '') {
			changeValue();
		}
	}, [value]);

	return (
		<div>
			<label className='!text-base'>{label}</label>
			<Textarea
				id='description'
				label={label}
				name={name}
				resize={false}
				onBlur={onBlur}
				onChange={onChange}
				ref={ref}
				error={!!errors[name]}
				disabled={isDisabled}
				className={`!border bg-white text-gray-900 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 ${
					errors[name] ? '!border-red-300' : '!border-gray-500'
				}`}
				labelProps={{
					className: 'hidden',
				}}
			/>
			<ErrorMessage
				errors={errors}
				name={name}
				render={({ message }) => <MessageError>{message}</MessageError>}
			/>
		</div>
	);
};
