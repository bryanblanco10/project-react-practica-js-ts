import { MyEnterprise } from '@/models';
import { Spinner } from '@material-tailwind/react';
import { useForm } from 'react-hook-form';
import { useEnterprise } from '../../hooks';
import { InputTextComponent } from '@/components';

const defaultValues: MyEnterprise = {
	uuid: '',
	name: '',
	address: '',
	cellphone: '',
	neighborhood: '',
	nit: '',
	nameDepartment: '',
	nameMunicipality: '',
};
export const FormMyEnterprise = () => {
	const { enterprise, isLoading } = useEnterprise();
	const {
		register,
		formState: { errors },
	} = useForm<MyEnterprise>({
		mode: 'all',
		defaultValues: defaultValues,
		values: enterprise,
	});

	const isDisabled = isLoading;

	return (
		<div className='mt-2'>
			<form className={`p-3 ${isDisabled ? 'form-disabled relative' : ''}`}>
				{isDisabled && (
					<div className='absolute top-1/2 left-1/2'>
						<Spinner color='green' className='h-16 w-16' />
					</div>
				)}
				<div className='mb-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-x-6 gap-y-4'>
					<InputTextComponent
						name='nit'
						label='NIT'
						register={register}
						required={true}
						errors={errors}
						isDisabled={true}
					/>
					<InputTextComponent
						name='cellphone'
						label='Celular'
						register={register}
						required={true}
						errors={errors}
						isDisabled={true}
					/>
					<InputTextComponent
						name='nameDepartment'
						label='Departamento'
						register={register}
						required={true}
						errors={errors}
						isDisabled={true}
					/>
					<InputTextComponent
						name='nameMunicipality'
						label='Municipio'
						register={register}
						required={true}
						errors={errors}
						isDisabled={true}
					/>
					<InputTextComponent
						name='address'
						label='Dirección'
						register={register}
						required={true}
						errors={errors}
						isDisabled={true}
					/>
					<InputTextComponent
						name='neighborhood'
						label='Celular'
						register={register}
						required={true}
						errors={errors}
						isDisabled={true}
					/>
				</div>
			</form>
		</div>
	);
};
