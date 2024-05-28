import { MessageError } from '@/components';
import { useLogin } from '../../hooks';
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
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { ModalSessionActive } from '../ModalSessionActive';

interface FormLogin {
	username: string;
	password: string;
}

export const FormLogin = () => {
	const {
		mutate,
		isLoading,
		handleModal,
		openModal,
		handleLogout,
		updateDataSend,
	} = useLogin();

	const [typeInput, setTypeInput] = useState<string>('password');
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormLogin>({
		mode: 'all',
		defaultValues: {
			username: '',
			password: '',
		},
	});

	const handleChangeTypeInput = () => {
		setTypeInput(prevState => (prevState === 'password' ? 'text' : 'password'));
	};

	const onSubmit: SubmitHandler<FormLogin> = (data, e) => {
		e?.preventDefault();
		clearNotify();
		updateDataSend(data);
		mutate(data);
	};
	return (
		<>
			<ModalSessionActive
				handleModal={handleModal}
				openModal={openModal}
				handleLogout={handleLogout}
			/>
			<Card className='w-80 lg:w-96'>
				<CardHeader
					floated={false}
					className='mb-4 grid h-auto place-items-center bg-white shadow-none text-center'
				>
					<Typography variant='h3' color='black' className='uppercase'>
						Tu Parqueadero
					</Typography>
					<div className='mt-3 mb-3'>
						<img src='/images/logologin.png' alt='Tu Parqueadero' loading='lazy' />
					</div>
					<Typography variant='h4' color='blue-gray'>
						Iniciar Sesión
					</Typography>
				</CardHeader>
				<CardBody className='flex flex-col gap-4'>
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
						<div>
							<div className='relative flex w-full max-w-[24rem]'>
								<Input
									type={typeInput}
									label='Contraseña'
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
								className='bg-app text-base flex gap-x-2 justify-center w-[200px]'
							>
								{isLoading ? <Spinner className='h-6 w-6' /> : 'Ingresar'}
							</Button>
						</div>
					</form>
					<div className='text-center'>
						<Link
							to='/recuperar-cuenta'
							className='text-blue-gray-500 hover:underline'
						>
							¿Has olvidado tu contraseña?
						</Link>
					</div>
				</CardBody>
			</Card>
		</>
	);
};
