import {
	InputNumberComponent,
	InputTextComponent,
	RadioComponent,
	SelectComponent
} from '@/components';
import { useDataGlobal } from '@/hooks';
import { CreateEnterprise } from '@/models';
import { useAllDepartments, useAllMunicipalities } from '@/views/Owner/hooks';
import { Button, Spinner } from '@material-tailwind/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { useDetailEnterprise, useUpdateEnterprise } from '../../hooks';
interface Props {
	isDetail: boolean;
}

const defaultValues: CreateEnterprise = {
	uuid: '',
	cellphone: '',
	name: '',
	nit: '',
	address: '',
	neighborhood: '',
	municipalityUuid: '',
	departmentUuid: '',
	status: '1',
};

export const FormEnterprise = ({ isDetail }: Props) => {
	const { uuid } = useParams();
	const { typeStatus } = useDataGlobal();
	const { departaments } = useAllDepartments();
	const { loadMunicipalities, municipalities } = useAllMunicipalities();
	const { isInitialLoadingDetail, enterprise } = useDetailEnterprise({ uuid });
	const { isLoadingUpdate, mutateUpdate } = useUpdateEnterprise();
	const {
		register,
		handleSubmit,
		setValue,
		watch,
		resetField,
		formState: { errors },
	} = useForm<CreateEnterprise>({
		mode: 'all',
		defaultValues: defaultValues,
		values: enterprise,
	});

	const isDisabled = isInitialLoadingDetail || isLoadingUpdate;

	const onSubmit: SubmitHandler<CreateEnterprise> = (data, e) => {
		e?.preventDefault();
		if (uuid) {
			delete data.uuid;
			data.status = data?.status == '1' ? true : false;
			mutateUpdate({ uuid, data });
		}
	};

	const handleSelectedMunicipaly = (value: string) => {
		loadMunicipalities(value);
		resetField('municipalityUuid');
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
					name='cellphone'
					label='Celular'
					register={register}
					required={true}
					errors={errors}
					isDisabled={isDetail}
					type='cellphone'
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
					isDisabled={isDetail}
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
