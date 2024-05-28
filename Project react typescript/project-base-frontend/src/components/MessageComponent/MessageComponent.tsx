import { Alert } from '@material-tailwind/react';

interface Props {
	isSuccess: boolean;
}

export const MessageComponent = ({ isSuccess }: Props) => {
	return (
		<>
			{isSuccess ? (
				<Alert className='rounded-none border-l-4 border-[#2ec946] bg-[#2ec946]/10 font-medium text-[#2ec946]'>
					<strong>Revisa la bandeja de entrada de tu correo.</strong> Se ha
					enviando un correo para que puedas restaurar tu contraseña. Recuerda
					que ese link <strong>vence en 15 minutos</strong>. Y tendrás que
					generar uno nuevo.
				</Alert>
			) : (
				<Alert className='rounded-none border-l-4 border-[#c94343] bg-[#c94343]/10 font-medium text-[#c94343]'>
					<strong>Error al cambiar tu contraseña.</strong> Tu link esta dañado ó
					a expirado, debes volver a generar otro.
				</Alert>
			)}
		</>
	);
};
