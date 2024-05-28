
import {
	Dialog,
	DialogBody,
	DialogHeader,
	IconButton,
	ThemeProvider,
	Typography,
} from '@material-tailwind/react';
import '../index.css';
import { useModalsStore } from '@/store';
import { useAuth } from '@/views';

const theme = {
	dialog: {
		styles: {
			base: {
				backdrop: {
					overflow: 'overflow-y-auto',
				},
			},
		},
	},
};

export const ModalExpiredToken = () => {
	const { isOpenModalSessionFinish } =
		useModalsStore();
	const { logout, user } = useAuth();
	
	const handleFinish = () => {
		logout({ username: user?.username });
	};

	return (
		<ThemeProvider value={theme}>
			<Dialog
				open={isOpenModalSessionFinish}
				handler={handleFinish}
				dismiss={{ escapeKey: false, enabled: false }}
				animate={{
					mount: { scale: 1, y: 0 },
					unmount: { scale: 0.9, y: -100 },
				}}
				size='xs'
			>
				<DialogHeader className='justify-between'>
					<div>
						<Typography variant='h5' color='blue-gray'>
							Sesión Finalizada
						</Typography>
					</div>
					<IconButton
						color='blue-gray'
						size='sm'
						variant='text'
						onClick={handleFinish}
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
							strokeWidth={2}
							className='h-5 w-5'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M6 18L18 6M6 6l12 12'
							/>
						</svg>
					</IconButton>
				</DialogHeader>
				<DialogBody>
					<div className='content-dialog'>
						<p>Tienes otra sesión activa en otro dispositivo.</p>
					</div>
				</DialogBody>
			</Dialog>
		</ThemeProvider>
	);
};
