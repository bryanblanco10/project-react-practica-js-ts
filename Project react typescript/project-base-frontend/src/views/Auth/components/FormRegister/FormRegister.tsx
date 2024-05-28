import { MessageError } from '@/components';
import { validationEmail, validationPassword, validationText } from '@/utils';
import { ErrorMessage } from '@hookform/error-message';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import {
	Button,
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Input,
	Typography,
} from '@material-tailwind/react';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

interface FormRegister {
	names: string;
	email: string;
	password: string;
}

export const FormRegister = () => {
	const [typeInput, setTypeInput] = useState<string>('password');
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormRegister>({
		mode: 'all',
		defaultValues: {
			names: '',
			email: '',
			password: '',
		},
	});

	const handleChangeTypeInput = () => {
		setTypeInput(prevState => (prevState === 'password' ? 'text' : 'password'));
	};
	const onSubmit: SubmitHandler<FormRegister> = (data, e) => {
		e?.preventDefault();
		console.log(data);
	};
	return (
		<Card className='w-80 lg:w-96'>
			<CardHeader
				floated={false}
				className='mb-4 grid h-20 place-items-center bg-white shadow-none'
			>
				<Typography variant='h3' color='black'>
					Crear cuenta
				</Typography>
			</CardHeader>
			<CardBody className='flex flex-col gap-4'>
				<form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4'>
					<div>
						<Input
							label='Nombre completo'
							size='lg'
							autoFocus
							{...register('names', validationText)}
							error={!!errors?.names}
						/>
						<ErrorMessage
							errors={errors}
							name='names'
							render={({ message }) => <MessageError>{message}</MessageError>}
						/>
					</div>
					<div>
						<Input
							type='email'
							label='Correo electrónico'
							size='lg'
							{...register('email', validationEmail)}
							error={!!errors?.email}
						/>
						<ErrorMessage
							errors={errors}
							name='email'
							render={({ message }) => <MessageError>{message}</MessageError>}
						/>
					</div>
					<div>
						<div className='relative flex w-full max-w-[24rem]'>
							<Input
								type={typeInput}
								label='Contraseña'
								className='pr-10'
								{...register('password', validationPassword)}
								error={!!errors?.password}
							/>
							<span
								className='!absolute right-1.5 top-2.5 w-7 cursor-pointer'
								onClick={handleChangeTypeInput}
							>
								{typeInput === 'password' ? (
									<EyeIcon className='h-6 w-6' />
								) : (
									<EyeSlashIcon className='h-6 w-6' />
								)}
								<span />
							</span>
						</div>
						<ErrorMessage
							errors={errors}
							name='password'
							render={({ message }) => <MessageError>{message}</MessageError>}
						/>
					</div>
					<div className='mt-4 text-center'>
						<Button
							type='submit'
							variant='gradient'
							className='bg-app text-base'
						>
							Crear cuenta
						</Button>
					</div>
				</form>
			</CardBody>
			<CardFooter className='pt-0 text-center'>
				<Typography
					variant='small'
					className='mt-6 flex justify-center text-base'
				>
					¿Ya tienes cuenta?
					<Link
						to='/iniciar-sesion'
						className='ml-1 font-bold text-black text-base'
					>
						Iniciar Sesión
					</Link>
				</Typography>
			</CardFooter>
		</Card>
	);
};
