import { InputEmailComponent, MessageComponent } from '@/components';
import { clearNotify } from '@/utils';
import {
	Button,
	Card,
	CardBody,
	CardHeader,
	Spinner,
	Typography,
} from '@material-tailwind/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useRecoveryPassword } from '../../hooks';

interface FormRecoveryPassword {
	email: string;
}

export const FormRecoveryPasword = () => {
	const { mutate, isLoading, isMessage } = useRecoveryPassword();
	const {
		register,
		handleSubmit,
		setValue,
		formState: { errors },
	} = useForm<FormRecoveryPassword>({
		mode: 'all',
		defaultValues: {
			email: '',
		},
	});

	const onSubmit: SubmitHandler<FormRecoveryPassword> = (data, e) => {
		e?.preventDefault();
		clearNotify();
		mutate(data);
		setValue('email', '');
	};
	return (
		<Card className='w-80 lg:w-96'>
			<CardHeader
				floated={false}
				className='mb-4 grid h-auto place-items-center bg-white shadow-none text-center'
			>
				<Typography variant='h3' color='black' className='uppercase'>
					Tu Parqueadero
				</Typography>
				<div className='mt-3 mb-3'>
					<img
						src='/images/logologin.png'
						alt='Tu Parqueadero'
						loading='lazy'
					/>
				</div>
				<Typography variant='h4' color='blue-gray'>
					Recuperar Cuenta
				</Typography>
			</CardHeader>
			<CardBody className='flex flex-col gap-4'>
				{isMessage ? (
					<MessageComponent isSuccess={true} />
				) : (
					<form
						onSubmit={handleSubmit(onSubmit)}
						className='flex flex-col gap-6'
					>
						<p>
							Introduce el correo que tienes asociado a tu cuenta. Te envíaremos
							un email para cambiar tu contraseña.
						</p>
						<div>
							<InputEmailComponent
								name='email'
								label='Correo electrónico'
								register={register}
								required={true}
								errors={errors}
								isDisabled={false}
							/>
						</div>
						<div className='mt-4 flex justify-center'>
							<Button
								type='submit'
								className='bg-app text-base flex gap-x-2 justify-center w-[150px]'
							>
								{isLoading ? <Spinner className='h-6 w-6' /> : 'Enviar'}
							</Button>
						</div>
					</form>
				)}
			</CardBody>
		</Card>
	);
};
