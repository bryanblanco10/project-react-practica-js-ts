import {
	InputNumberComponent,
	InputPriceComponent,
	InputTextComponent,
} from '@/components';
import { CreateInvoice } from '@/models';

import { Button } from '@material-tailwind/react';
import { SubmitHandler, useForm } from 'react-hook-form';

const defaultValues: CreateInvoice = {
	name: '',
	cellphone: '',
	destination: '',
	guide: '',
	payment: '',
	uuid: 0,
	date: '',
	nameInvoice: '',
};

interface Props {
	handleChange: (sale: CreateInvoice) => void;
}

export const FormInvoice = ({ handleChange }: Props) => {
	const {
		register,
		handleSubmit,
		setValue,
		reset,
		formState: { errors },
	} = useForm<CreateInvoice>({
		mode: 'all',
		defaultValues: defaultValues,
	});

	const onSubmit: SubmitHandler<CreateInvoice> = (data, e) => {
		e?.preventDefault();
		data.uuid = Math.floor(100000 + Math.random() * 900000);
		data.date = `${new Date().toLocaleDateString()} - ${new Date().toLocaleTimeString()}`;
		data.nameInvoice = `factura-${data?.name.split(' ').join('-')}-${
			data?.uuid
		}-${data?.date}`;
		handleChange(data);
		handleReset();
	};

	const handleReset = () => {
		reset(defaultValues);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={`p-3`}>
			<div className='mb-4 grid gap-x-6 gap-y-4 grid-cols-1 md:grid-cols-1'>
				<InputTextComponent
					name='name'
					label='Nombre'
					register={register}
					required={true}
					errors={errors}
					isDisabled={false}
				/>
				<InputNumberComponent
					name='cellphone'
					label='Celular'
					register={register}
					required={true}
					errors={errors}
					isDisabled={false}
					type='cellphone'
				/>
				<InputPriceComponent
					name='payment'
					label='Abono'
					register={register}
					setValue={setValue}
					required={true}
					errors={errors}
					isDisabled={false}
				/>
				<InputTextComponent
					name='destination'
					label='Destino'
					register={register}
					required={true}
					errors={errors}
					isDisabled={false}
				/>
				<InputTextComponent
					name='guide'
					label='Guía'
					register={register}
					required={true}
					errors={errors}
					isDisabled={false}
				/>
			</div>
			<div className='mt-8 flex flex-col md:flex-row gap-y-4 md:gap-x-3 justify-center'>
				<Button type='submit' color='green' className='w-full md:w-[150px]'>
					Crear
				</Button>
				<Button
					type='button'
					color='red'
					variant='outlined'
					className='w-full md:w-[150px]'
					onClick={handleReset}
				>
					Limpiar
				</Button>
			</div>
		</form>
	);
};
