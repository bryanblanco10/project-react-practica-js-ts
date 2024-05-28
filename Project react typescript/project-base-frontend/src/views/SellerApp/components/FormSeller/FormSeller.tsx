import {
	InputEmailComponent,
	InputNumberComponent,
	InputTextComponent,
	RadioComponent
} from '@/components';
import { useDataGlobal } from '@/hooks';
import { CreateSeller } from '@/models';
import { Button, Spinner } from '@material-tailwind/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import {
	useCreateSellerApp,
	useDetailSellerApp,
	useUpdateSellerApp
} from '../../hooks';

interface Props {
	isDetail?: boolean;
}

const defaultValues: CreateSeller = {
	uuid: '',
	email: '',
	identification: '',
	names: '',
	last_names: '',
	profileUuid: 'd3cc1602-d3a1-4a05-ac3f-a9762b17d531',
	username: '',
	status: '',
};
export const FormSeller = ({ isDetail }: Props) => {
	const { uuid } = useParams();
	const { isLoading, mutateCreate } = useCreateSellerApp();
	const { isInitialLoadingDetail, seller } = useDetailSellerApp({ uuid });
	const { isLoadingUpdate, mutateUpdate } = useUpdateSellerApp();
	const { typeStatus } = useDataGlobal();

	const {
		register,
		handleSubmit,
		setValue,
		formState: { errors },
	} = useForm<CreateSeller>({
		mode: 'all',
		defaultValues: defaultValues,
		values: seller || undefined,
	});

	const isDisabled = isLoading || isInitialLoadingDetail || isLoadingUpdate;

	const onSubmit: SubmitHandler<CreateSeller> = (data, e) => {
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
				{seller?.username && (
					<InputTextComponent
						name='username'
						label='Usuario'
						register={register}
						required={true}
						errors={errors}
						isDisabled={true}
					/>
				)}
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
