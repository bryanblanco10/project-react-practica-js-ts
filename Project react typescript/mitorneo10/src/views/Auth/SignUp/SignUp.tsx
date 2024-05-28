import { MessageError } from '@/components';
import { useAuth } from '@/hooks';
import { validationEmail, validationPassword, validationText } from '@/utils';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import { ErrorMessage } from '@hookform/error-message';
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
import { useForm, type SubmitHandler } from 'react-hook-form';
import { Link } from 'react-router-dom';

interface FormRegister {
	name: string;
	email: string;
	password: string;
}
export const SignUp = () => {
	useAuth();
	const [typeInput, setTypeInput] = useState<string>('password');
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormRegister>({
		mode: 'onSubmit',
		defaultValues: {
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
		<>
			<img
				src='https://images.unsplash.com/photo-1497294815431-9365093b7331?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80'
				className='absolute inset-0 z-0 h-full w-full object-cover'
			/>
			<div className='absolute inset-0 z-0 h-full w-full background-image' />
			<div className='container mx-auto p-4'>
				<Card className='absolute top-2/4 left-2/4 w-full max-w-[24rem] -translate-y-2/4 -translate-x-2/4'>
					<CardHeader
						variant='gradient'
						className='mb-4 grid h-28 place-items-center bg-[#014121]'
					>
						<Typography variant='h3' color='white'>
							Registro
						</Typography>
					</CardHeader>
					<div className='flex justify-center'>
						<img src='/img/logo.png' width='300' />
					</div>
					<CardBody>
						<form
							onSubmit={handleSubmit(onSubmit)}
							className='flex flex-col gap-4'
						>
							<div>
								<Input
									label='Nombre completo'
									size='lg'
									autoFocus
									{...register('name', validationText)}
									error={!!errors?.name}
								/>
								<ErrorMessage
									errors={errors}
									name='name'
									render={({ message }) => (
										<MessageError>{message}</MessageError>
									)}
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
									render={({ message }) => (
										<MessageError>{message}</MessageError>
									)}
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
									render={({ message }) => (
										<MessageError>{message}</MessageError>
									)}
								/>
							</div>
							<div className='mt-4'>
								<Button type='submit' variant='gradient' fullWidth>
									Registrarse
								</Button>
							</div>
						</form>
					</CardBody>
					<CardFooter className='pt-0'>
						<Typography variant='small' className='mt-6 flex justify-center'>
							¿Ya tienes una cuenta?
							<Link to='/iniciar-sesion'>
								<Typography
									as='span'
									variant='small'
									color='blue'
									className='ml-1 font-bold'
								>
									Iniciar Sesión
								</Typography>
							</Link>
						</Typography>
					</CardFooter>
				</Card>
			</div>
		</>
	);
};
