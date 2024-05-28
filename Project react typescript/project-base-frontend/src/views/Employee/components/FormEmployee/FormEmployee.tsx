import {
	InputEmailComponent,
	InputNumberComponent,
	InputTextComponent,
	RadioComponent,
	SelectComponent,
} from '@/components';
import { useDataGlobal } from '@/hooks';
import { CreateEmployee } from '@/models';
import { Button, Spinner } from '@material-tailwind/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import {
	useCreateEmployee,
	useDetailEmployee,
	useProfiles,
	useUpdateEmployee,
} from '../../hooks';

interface Props {
	isDetail?: boolean;
}

const defaultValues: CreateEmployee = {
	uuid: '',
	cellphone: '',
	email: '',
	gender: '',
	identification: '',
	names: '',
	last_names: '',
	profileUuid: '',
	type_identification: 'Cédula de Ciudadanía',
	address: '',
	username: '',
	status: '',
};
export const FormEmployee = ({ isDetail }: Props) => {
	const { uuid } = useParams();
	const { profiles } = useProfiles();
	const { isLoading, mutateCreate } = useCreateEmployee();
	const { isInitialLoadingDetail, employee } = useDetailEmployee({ uuid });
	const { isLoadingUpdate, mutateUpdate } = useUpdateEmployee();
	const { typeStatus, typeGenders, typeIdentifications } = useDataGlobal();

	const {
		register,
		handleSubmit,
		setValue,
		watch,
		formState: { errors },
	} = useForm<CreateEmployee>({
		mode: 'all',
		defaultValues: defaultValues,
		values: employee || undefined,
	});

	const isDisabled = isLoading || isInitialLoadingDetail || isLoadingUpdate;

	const onSubmit: SubmitHandler<CreateEmployee> = (data, e) => {
		e?.preventDefault();
		if (uuid) {
			data.status = data?.status === '1';
			mutateUpdate({ uuid, data });
		} else {
			delete data.uuid;
			delete data.status;
			mutateCreate(data);
		}
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className={`p-3 ${isDisabled ? 'form-disabled relative' : ''}`}
		>
			{isDisabled && (
				<div className='absolute top-1/2 left-1/2'>
					<Spinner color='amber' className='h-16 w-16' />
				</div>
			)}
			<div className='mb-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4'>
				<InputTextComponent
					name='names'
					label='Nombres'
					register={register}
					required={true}
					errors={errors}
					isDisabled={isDetail}
				/>
				<InputTextComponent
					name='last_names'
					label='Apellidos'
					register={register}
					required={true}
					errors={errors}
					isDisabled={isDetail}
				/>
				<SelectComponent
					label='Tipo de Identificación'
					options={typeIdentifications}
					required={true}
					name='type_identification'
					setValue={setValue}
					register={register}
					errors={errors}
					isDisabled={isDetail}
					value={watch('type_identification')}
				/>
				<InputNumberComponent
					name='identification'
					label='Identificación'
					register={register}
					required={true}
					errors={errors}
					isDisabled={isDetail}
					type='identification'
				/>
				<InputEmailComponent
					name='email'
					label='Email'
					register={register}
					required={true}
					errors={errors}
					isDisabled={isDetail}
				/>
				<InputNumberComponent
					name='cellphone'
					label='Celular'
					register={register}
					required={true}
					errors={errors}
					isDisabled={isDetail}
					type='cellphone'
				/>
				<InputTextComponent
					name='address'
					label='Dirección'
					register={register}
					required={false}
					errors={errors}
					isDisabled={isDetail}
				/>
				<SelectComponent
					label='Género'
					options={typeGenders}
					required={true}
					name='gender'
					setValue={setValue}
					register={register}
					errors={errors}
					isDisabled={isDetail}
					value={watch('gender')}
				/>
				{employee?.username && (
					<InputTextComponent
						name='username'
						label='Usuario'
						register={register}
						required={true}
						errors={errors}
						isDisabled={true}
					/>
				)}
				<SelectComponent
					label='Perfil'
					options={profiles}
					required={true}
					name='profileUuid'
					setValue={setValue}
					register={register}
					errors={errors}
					isDisabled={isDetail}
					value={watch('profileUuid')}
				/>
				{uuid && (
					<RadioComponent
						options={typeStatus}
						name='status'
						register={register}
						setValue={setValue}
						required={true}
						errors={errors}
						isDisabled={isDetail}
						label='Estado'
					/>
				)}
			</div>
			{!isDetail && (
				<div className='flex justify-center'>
					<Button
						type='submit'
						color={uuid !== undefined ? 'amber' : 'green'}
						className='mt-6 w-[150px]'
					>
						{uuid !== undefined ? 'Actualizar' : 'Crear'}
					</Button>
				</div>
			)}
		</form>
	);
};
