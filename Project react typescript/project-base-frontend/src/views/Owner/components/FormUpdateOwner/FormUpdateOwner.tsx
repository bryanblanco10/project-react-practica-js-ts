import {
	InputEmailComponent,
	InputNumberComponent,
	InputTextComponent,
	RadioComponent,
	SelectComponent
} from '@/components';
import { useDataGlobal } from '@/hooks';
import { UpdateOwner } from '@/models';
import { Button, Spinner } from '@material-tailwind/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import {
	useDetailOwner,
	useUpdateOwner
} from '../../hooks';
interface Props {
	isDetail: boolean;
}

const defaultValues: UpdateOwner = {
	uuid: '',
	email: '',
	names: '',
	last_names: '',
	type_identification: 'Cédula de Ciudadanía',
	identification: null,
	cellphone: null,
	status: '1',
	userUuid: '',
};

export const FormUpdateOwner = ({ isDetail }: Props) => {
	const { uuid } = useParams();
	const { typeIdentifications, typeStatus } = useDataGlobal();
	const { isInitialLoadingDetail, owner } = useDetailOwner({ uuid });
	const { isLoadingUpdate, mutateUpdate } = useUpdateOwner();
	const {
		register,
		handleSubmit,
		setValue,
		watch,
		formState: { errors },
	} = useForm<UpdateOwner>({
		mode: 'all',
		defaultValues: defaultValues,
		values: owner,
	});

	const isDisabled = isInitialLoadingDetail || isLoadingUpdate;

	const onSubmit: SubmitHandler<UpdateOwner> = (data, e) => {
		e?.preventDefault();
		if (uuid) {
			delete data.uuid;
			data.status = data?.status == '1' ? true : false;
			mutateUpdate({ uuid, data });
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
			<div className='mb-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-x-6 gap-y-4'>
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
