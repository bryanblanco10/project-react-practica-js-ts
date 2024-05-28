import {
	InputDateComponent,
	InputEmailComponent,
	InputNumberComponent,
	InputTextComponent,
	RadioComponent,
	SelectComponent,
} from '@/components';
import { useDataGlobal } from '@/hooks';
import { CreateOwner } from '@/models';
import { Button, Spinner } from '@material-tailwind/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import {
	useAllProfiles,
	useCreateOwner,
	useDetailOwner,
	useUpdateOwner,
	useAllDepartments,
	useAllPlans,
	useAllMunicipalities,
} from '../../hooks';
import { addMonths, format } from 'date-fns';
interface Props {
	isDetail: boolean;
}

const defaultValues: CreateOwner = {
	email: '',
	profileUuid: 'bcaa1cc2-72f3-4183-a36b-03e4c7d845ba',
	names: '',
	last_names: '',
	type_identification: 'Cédula de Ciudadanía',
	identification: null,
	cellphone: null,
	cellphone_enterprise: null,
	name: '',
	nit: '',
	address: '',
	neighborhood: '',
	municipalityUuid: '',
	departmentUuid: '',
	initial_date: '',
	final_date: '',
	planEnterprisePriceUuid: '',
	total: '0',
	discount: 0,
};

export const FormOwner = ({ isDetail }: Props) => {
	const { uuid } = useParams();
	const { typeIdentifications, typeStatus } = useDataGlobal();
	const { profiles } = useAllProfiles();
	const { departaments } = useAllDepartments();
	const { plans } = useAllPlans();
	const { loadMunicipalities, municipalities } = useAllMunicipalities();
	const { isLoading, mutateCreate } = useCreateOwner();
	const { isInitialLoadingDetail, owner } = useDetailOwner({ uuid });
	const { isLoadingUpdate, mutateUpdate } = useUpdateOwner();
	const {
		register,
		handleSubmit,
		setValue,
		watch,
		resetField,
		formState: { errors },
	} = useForm<CreateOwner>({
		mode: 'all',
		defaultValues: defaultValues,
		values: owner,
	});

	const isDisabled = isLoading || isInitialLoadingDetail || isLoadingUpdate;

	const onSubmit: SubmitHandler<CreateOwner> = (data, e) => {
		e?.preventDefault();
		if (uuid) {
			delete data.uuid;
			data.status = data?.status == '1' ? true : false;
			mutateUpdate({ uuid, data });
		} else {
			delete data.uuid;
			delete data.status;
			mutateCreate(data);
		}
	};

	const handleSelectedMunicipaly = (value: string) => {
		loadMunicipalities(value);
		resetField('municipalityUuid');
	};

	const dateStarAndFinish = () => {
		const dateFinal: Date = addMonths(watch('initial_date'), 1);
		setValue('final_date', format(dateFinal, "yyyy-MM-dd"));
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
				<InputTextComponent
					name='name'
					label='Nombre de la empresa'
					register={register}
					required={true}
					errors={errors}
					isDisabled={isDetail}
				/>
				<InputNumberComponent
					name='nit'
					label='Nit'
					register={register}
					required={true}
					errors={errors}
					isDisabled={isDetail}
					type='number'
				/>
				<InputNumberComponent
					name='cellphone_enterprise'
					label='Celular de la empresa'
					register={register}
					required={true}
					errors={errors}
					isDisabled={isDetail}
					type='cellphone'
				/>
				<InputDateComponent
					name='initial_date'
					label='Fecha Inicial'
					register={register}
					required={true}
					errors={errors}
					isDisabled={isDetail}
					handleEventDate={() => dateStarAndFinish()}
				/>
				{watch('initial_date') && (
					<InputDateComponent
						name='final_date'
						label='Fecha Final'
						register={register}
						required={true}
						errors={errors}
						isDisabled={true}
					/>
				)}
				<InputNumberComponent
					name='total'
					label='Total'
					register={register}
					required={true}
					errors={errors}
					isDisabled={true}
					type='number'
				/>
				<SelectComponent
					label='Departamento'
					options={departaments}
					required={true}
					name='departmentUuid'
					setValue={setValue}
					register={register}
					errors={errors}
					isEvent={true}
					searchData={handleSelectedMunicipaly}
					isDisabled={uuid ? true : false}
					value={watch('departmentUuid')}
				/>
				<SelectComponent
					label='Municipio'
					options={municipalities}
					required={true}
					name='municipalityUuid'
					setValue={setValue}
					register={register}
					errors={errors}
					isDisabled={isDetail}
					value={watch('municipalityUuid')}
				/>
				<InputTextComponent
					name='neighborhood'
					label='Barrio'
					register={register}
					required={false}
					errors={errors}
					isDisabled={isDetail}
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
					label='Plan'
					options={plans}
					required={true}
					name='planEnterprisePriceUuid'
					setValue={setValue}
					register={register}
					errors={errors}
					isDisabled={uuid ? true : false}
					value={watch('planEnterprisePriceUuid')}
				/>
				<SelectComponent
					label='Perfil'
					options={profiles}
					required={true}
					name='profileUuid'
					setValue={setValue}
					register={register}
					errors={errors}
					isDisabled={true}
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
