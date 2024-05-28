import { FormComponent } from '@/models';
import { validationText } from '@/utils';
import { ErrorMessage } from '@hookform/error-message';
import { Radio } from '@material-tailwind/react';
import { MessageError } from '..';
import { UseFormSetValue } from 'react-hook-form';

interface Props extends FormComponent {
	options: { value: string | undefined; label: string | undefined }[];
	setValue: UseFormSetValue<any>;
}
export const RadioComponent = ({
	options,
	required,
	register,
	setValue,
	name: nameField,
	errors,
	isDisabled,
	label,
}: Props) => {
	const requiredField = required ? validationText : undefined;
	const { name, ref } = register(nameField, requiredField);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = event.target;
		if (value) setValue(nameField, value, { shouldValidate: true });
	};

	return (
		<div>
			<label className='!text-base'>{label}</label>
			<div className='flex flex-col'>
				{options.map(item => (
					<Radio
						key={item?.value}
						label={item?.label}
						value={item?.value}
						onChange={event => handleChange(event)}
						name={nameField}
						className={`${errors[name] ? 'border-[#c94343]' : ''}`}
						disabled={isDisabled}
						inputRef={ref}
					/>
				))}
			</div>
			<ErrorMessage
				errors={errors}
				name={name}
				render={({ message }) => <MessageError>{message}</MessageError>}
			/>
		</div>
	);
};
