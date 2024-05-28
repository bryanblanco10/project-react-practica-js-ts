import {
	Button,
	Dialog,
	DialogBody,
	DialogFooter,
	DialogHeader,
} from '@material-tailwind/react';

interface Props {
	handleModal: (value: boolean) => void;
	handleLogout: () => void;
	openModal: boolean;
}
export const ModalSessionActive = ({ handleModal, openModal, handleLogout }: Props) => {

	const closeModal = () => {
		handleModal(false);
	}

	return (
		<>
			<Dialog
				open={openModal}
				size="xs"
				handler={closeModal}
				animate={{
					mount: { scale: 1, y: 0 },
					unmount: { scale: 0.9, y: -100 },
				}}
			>
				<DialogHeader>Sesión Activa</DialogHeader>
				<DialogBody>
					Actualmente cuentas con una sesión activa en otro dispositivo ¿Deseas cerrar la sesión, para poder iniciar en este dispositivo?
				</DialogBody>
				<DialogFooter>
					<Button
						variant='text'
						color='red'
						onClick={closeModal}
						className='mr-1'
					>
						<span>No</span>
					</Button>
					<Button variant='gradient' color='green' onClick={handleLogout}>
						<span>Si</span>
					</Button>
				</DialogFooter>
			</Dialog>
		</>
	);
};
