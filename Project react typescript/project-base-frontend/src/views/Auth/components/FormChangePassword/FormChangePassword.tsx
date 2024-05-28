import { MessageComponent, MessageError } from '@/components';
import { useAuthStore } from '@/store';
import { clearNotify } from '@/utils';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import { ErrorMessage } from '@hookform/error-message';
import {
	Button,
	Card,
	CardBody,
	CardHeader,
	Input,
	Spinner,
	Typography,
} from '@material-tailwind/react';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link, useLocation } from 'react-router-dom';
import { useChangePassword, useChangePasswordFistSession } from '../../hooks';

interface FormLogin {
	username: string;
	password: string;
	token: string;
	curretPassword?: string;
}

export const FormChangePassword = () => {
	const { user } = useAuthStore();
	const { changePassword, isLoading, isMessage } = useChangePassword();
	const { changePasswordFistSession, isLoading2 } =
		useChangePasswordFistSession();
	const { search } = useLocation();
	const [typeInput, setTypeInput] = useState<string>('password');
	const {
		register,
		handleSubmit,
		setValue,
		formState: { errors },
	} = useForm<FormLogin>({
		mode: 'all',
		defaultValues: {
			username: '',
			password: '',
			token: '',
			curretPassword: '',
		},
	});

	const handleChangeTypeInput = () => {
		setTypeInput(prevState => (prevState === 'password' ? 'text' : 'password'));
	};

	const onSubmit: SubmitHandler<FormLogin> = (data, e) => {
		e?.preventDefault();
		clearNotify();
		if (user?.isFisrtSession) {
			changePasswordFistSession(data);
		} else {
			changePassword(data);
		}
	};

	useEffect(() => {
		if (search) {
			setValue('token', search.split('=')[1]);
		}
	}, [search]);
	
	return (
		<Card className='w-80 lg:w-96'>
			<CardHeader
				floated={false}
				className='mb-4 grid place-items-center bg-white shadow-none text-center'
			>
				<Typography variant='h3' color='black'>
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
					Nueva Contraseña
				</Typography>
				{user?.isFisrtSession && (
					<Typography variant='h6' color='blue-gray'>
						<strong>Acción obligatoria</strong>. Por ser la primera vez que
						inicia sesión, debes cambiar tu contraseña
					</Typography>
				)}
			</CardHeader>
			<CardBody className='flex flex-col gap-4'>
				{!user?.isFisrtSession && isMessage ? (
					<>
						<MessageComponent isSuccess={false} />
						<div className='text-center'>
							<Link
								to='/recuperar-cuenta'
								className='text-blue-gray-500 hover:underline'
							>
								Generar otro link
							</Link>
						</div>
					</>
				) : (
					<form
						onSubmit={handleSubmit(onSubmit)}
						className='flex flex-col gap-6'
					>
						<div>
							<Input
								label='Usuario'
								size='lg'
								autoFocus
								{...register('username', {
									required: { value: true, message: 'Campo requerido' },
								})}
								error={!!errors?.username}
							/>
							<ErrorMessage
								errors={errors}
								name='username'
								render={({ message }) => <MessageError>{message}</MessageError>}
							/>
						</div>
						{user?.isFisrtSession && (
							<div>
								<div className='relative flex w-full max-w-[24rem]'>
									<Input
										type={typeInput}
										label='Contraseña Actual'
										size='lg'
										className='pr-10'
										{...register('curretPassword', {
											required: { value: true, message: 'Campo requerido' },
										})}
										error={!!errors?.curretPassword}
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
						)}
						<div>
							<div className='relative flex w-full max-w-[24rem]'>
								<Input
									type={typeInput}
									label='Nueva Contraseña'
									size='lg'
									className='pr-10'
									{...register('password', {
										required: { value: true, message: 'Campo requerido' },
									})}
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
						<div className='mt-4 flex justify-center'>
							<Button
								type='submit'
								className='bg-app text-base flex gap-x-2 justify-center w-[150px]'
							>
								{isLoading || isLoading2 ? (
									<Spinner className='h-6 w-6' />
								) : (
									'Cambiar'
								)}
							</Button>
						</div>
					</form>
				)}
			</CardBody>
		</Card>
	);
};
