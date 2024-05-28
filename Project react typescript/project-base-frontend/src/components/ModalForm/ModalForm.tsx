import { useModalFormStore } from '@/store';
import {
	Button,
	Dialog,
	DialogBody,
	DialogFooter,
	DialogHeader,
	IconButton,
	Typography,
	ThemeProvider,
} from '@material-tailwind/react';

const theme = {
  dialog: {
    styles: {
      base: {
        backdrop: {
					overflow: "overflow-y-auto",
        },
      },
    },
  },
};


interface Props {
	title: string;
	children: React.ReactElement;
}
export const ModalForm = ({title, children }: Props) => {
	const { handleOpen, isOpen } = useModalFormStore();
	return (
		<ThemeProvider value={theme}>
			<Dialog
				open={isOpen}
				handler={() => handleOpen(false)}
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
							{title}
						</Typography>
					</div>
					<IconButton
						color='blue-gray'
						size='sm'
						variant='text'
						onClick={() => handleOpen(false)}
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
				<DialogBody>{ children }</DialogBody>
				<DialogFooter>
					<Button
						variant='text'
						color='red'
						onClick={() => handleOpen(false)}
						className='mr-1'
					>
						<span>Cancelar</span>
					</Button>
				</DialogFooter>
			</Dialog>
		</ThemeProvider>
	);
};
