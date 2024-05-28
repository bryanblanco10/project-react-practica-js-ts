import {
	InputDateComponent,
	InputPercentageComponent,
	InputTextComponent,
	RadioComponent,
	SelectComponent
} from '@/components';
import { useDataGlobal } from '@/hooks';
import { CreatePayment } from '@/models';
import { useAllPlans } from '@/views/Owner/hooks';
import { Button, Spinner } from '@material-tailwind/react';
import { addMonths, format } from 'date-fns';
import { useMemo, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import {
	useCreatePayment,
	useDetailPayment,
	useUpdatePayment,
} from '../../hooks';
import { formatNumber } from '@/utils';
interface Props {
	isDetail: boolean;
}

const defaultValues: CreatePayment = {
	final_date: '',
	initial_date: '',
	is_debt: false,
	payment_method: '',
	planEnterprisePriceUuid: '',
	status: '1',
	uuid: '',
	total: '50.000',
	discount: '',
	enterpriseUuid: '',
};

export const FormPayment = ({ isDetail }: Props) => {
	const { uuid, uuidEnterprise } = useParams();
	const { paymentMethods, typeStatus } = useDataGlobal();
	const { plans } = useAllPlans();
	const { isLoading, mutateCreate } = useCreatePayment();
	const { isInitialLoadingDetail, payment } = useDetailPayment({ uuid });
	const { isLoadingUpdate, mutateUpdate } = useUpdatePayment();
	const [numberMonths, setNumberMonths] = useState(1);
	const {
		register,
		handleSubmit,
		setValue,
		watch,
		formState: { errors },
	} = useForm<CreatePayment>({
		mode: 'all',
		defaultValues: defaultValues,
		values: payment,
	});

	const isDisabled = isLoading || isInitialLoadingDetail || isLoadingUpdate;

	const onSubmit: SubmitHandler<CreatePayment> = (data, e) => {
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

	const dateStarAndFinish = () => {
		const dateFinal: Date = addMonths(watch('initial_date'), numberMonths);
		setValue('final_date', format(dateFinal, 'yyyy-MM-dd'));
	};

	const totalDiscount = () => {
		const planEnterprisePriceUuid = watch('planEnterprisePriceUuid');
		if (planEnterprisePriceUuid) {
			const record = plans.find(
				(el: any) => el?.value == planEnterprisePriceUuid
			);
			if (record) {
				const numberMonths =
					record?.type == 'Mensual'
						? 1
						: record?.type == 'Trimestral'
						? 3
						: record?.type == 'Semestral'
						? 6
						: 12;
				setNumberMonths(numberMonths);

				const discount = watch('discount');

				if (discount) {
					const total = Number((record?.price + '')?.split('.').join(''));
					const newTotal =  total - (total * (Number(discount) / 100));
					setValue('total', formatNumber(newTotal + ''));
				} else {
					setValue('total', record.price + '')
				}
			}
		}
	}

	useMemo(() => {
		totalDiscount();
	}, [watch('planEnterprisePriceUuid')]);

	useMemo(() => {
		totalDiscount();
	}, [watch('discount')]);

	useMemo(() => {
		setValue('enterpriseUuid', uuidEnterprise);
	}, [uuidEnterprise]);

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
				{watch('planEnterprisePriceUuid') && (
					<InputDateComponent
						name='initial_date'
						label='Fecha Inicial'
						register={register}
						required={true}
						errors={errors}
						isDisabled={isDetail || payment?.payment_method === 'Mes Gratis' ? true : false }
						handleEventDate={() => dateStarAndFinish()}
					/>
				)}
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
				{watch('planEnterprisePriceUuid') && (
					<>
						<InputPercentageComponent
							name='discount'
							label='Descuento'
							register={register}
							setValue={setValue}
							required={false}
							errors={errors}
							isDisabled={isDetail || payment?.payment_method === 'Mes Gratis' ? true : false}
						/>
						<InputTextComponent
							name='total'
							label='Total'
							register={register}
							required={true}
							errors={errors}
							isDisabled={true}
						/>
						<SelectComponent
							label='Metodo de pago'
							options={paymentMethods}
							required={true}
							name='payment_method'
							setValue={setValue}
							register={register}
							errors={errors}
							isDisabled={isDetail || payment?.payment_method === 'Mes Gratis' ? true : false}
							value={watch('payment_method')}
						/>
					</>
				)}
				{uuid && (
					<RadioComponent
						options={typeStatus}
						name='status'
						register={register}
						setValue={setValue}
						required={true}
						errors={errors}
						isDisabled={isDetail || payment?.payment_method === 'Mes Gratis' ? true : false}
						label='Estado'
					/>
				)}
			</div>
			{!isDetail && (payment?.payment_method === 'Mes Gratis' ? false : true) && (
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
