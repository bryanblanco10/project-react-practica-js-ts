import { useAuthStore } from '@/store';
import { formatPrice } from '@/utils';
import {
	Dialog,
	DialogBody,
	DialogHeader,
	IconButton,
	ThemeProvider,
	Typography,
} from '@material-tailwind/react';
import '../index.css';

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

interface Props {
	handleModalRenovation: () => void;
	isOpen: boolean;
}
export const ModalRenovationPlan = ({handleModalRenovation, isOpen}: Props) => {
	const { user } = useAuthStore();

	return (
		<ThemeProvider value={theme}>
			<Dialog
				open={isOpen}
				handler={handleModalRenovation}
				dismiss={{ escapeKey: false, enabled: false }}
				animate={{
					mount: { scale: 1, y: 0 },
					unmount: { scale: 0.9, y: -100 },
				}}
				size='xs'
			>
				<DialogHeader className='justify-between'>
					<div>
						{user?.dataSms && (
							<Typography variant='h5' color='blue-gray'>
								{user?.dataSms?.discount > 0
									? '¡Renueva tu suscripción con un descuento especial!'
									: '¡Renueva tu suscripción!'}
							</Typography>
						)}
					</div>
					<IconButton
						color='blue-gray'
						size='sm'
						variant='text'
						onClick={handleModalRenovation}
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
					{user?.dataSms && user?.dataSms?.discount > 0 && (
						<div className='content-dialog'>
							<p>
								!Hola <strong>{user?.dataSms?.names}</strong>, de <strong>{user?.dataSms?.enterprise}</strong>!
							</p>
							<p>
								Esperamos que estés disfrutando de nuestro servicio tanto como
								nosotros disfrutamos brindártelo. Queremos asegurarnos de que
								continúes disfrutando de todos los beneficios de nuestra
								plataforma Tu Parqueadero.
							</p>
							<p>
								Nos gustaría recordarte que tu suscripción está próxima a vencer
								el <strong>{user?.dataSms?.final_date}</strong>. Pero ¡no te
								preocupes! Estamos aquí para hacer que la renovación sea aún más
								gratificante para ti.
							</p>
							<p>
								Si decides renovar tu suscripción hoy{' '}
								<strong>{user?.dataSms?.currentDate}</strong>, te ofrecemos un
								descuento especial del{' '}
								<strong>{user?.dataSms?.percentage}%</strong>. Este es nuestro
								agradecimiento por tu continua confianza en nosotros.
							</p>
							<p>
								Recuerda que al renovar anticipadamente, no solo garantizas la
								continuidad de tu acceso sin interrupciones, sino que también te
								beneficias de un precio reducido.
							</p>
							<div className='pl-6 mb-4'>
								<ul className='list-disc'>
									<li>
										<strong>Plan:</strong> {user?.dataSms?.namePlan}
									</li>
									<li>
										<strong>Precio:</strong>{' '}
										{formatPrice(user?.dataSms?.price + '')}
									</li>
									<li>
										<strong>Descuento:</strong>{' '}
										{formatPrice(user?.dataSms?.discount + '')}
									</li>
									<li>
										<strong>Total a pagar:</strong>{' '}
										{formatPrice(user?.dataSms?.total + '')}
									</li>
								</ul>
							</div>
							<div className='pl-6 mb-4'>
								<strong>Métodos de pago</strong>
								<ul className='list-disc'>
									<li>Ahorros Bancolombia: <strong>007-363929-17</strong></li>
									<li>Nequi: <strong>3007623748</strong></li>
								</ul>
							</div>
							<p>
								<strong>Por favor</strong>, debes enviar una foto del
								comprobante de pago al <strong>300 7492396</strong>, para que
								podamos verificar el pago.
							</p>
							<p>
								¡No dejes pasar esta oportunidad! Renueva ahora y sigue
								disfrutando de todos los beneficios que ofrecemos.
							</p>
							<p>Gracias por ser parte de nuestra comunidad.</p>
							<p>Atentamente, Equipo Tu Parqueadero</p>
							<p>
								Si tienes alguna pregunta o necesitas ayuda con el proceso de
								renovación, no dudes en ponerte en contacto con nuestro equipo
								de soporte al <strong>300 7492396</strong> Estamos aquí para
								ayudarte en cualquier momento.
							</p>
						</div>
					)}
					{user?.dataSms && user?.dataSms?.discount === 0 && (
						<div className='content-dialog'>
							<p>
								!Hola <strong>{user?.dataSms?.names}</strong>,{' '}
								{user?.dataSms?.enterprise}!
							</p>
							<p>
								Esperamos que te encuentres bien. Queremos recordarte que tu
								suscripción a nuestro servicio venció el{' '}
								<strong>{user?.dataSms?.final_date}</strong>. Nos encantaría que
								siguieras siendo parte de nuestra comunidad y que continúes
								disfrutando de todos los beneficios que ofrecemos.
							</p>
							<p>
								Sabemos que la vida puede ser ocupada y que a veces se nos pasan
								las fechas importantes. Pero ¡no te preocupes! Todavía estás a
								tiempo para renovar tu suscripción y recuperar el acceso
								completo a nuestra plataforma Tu Parqueadero.
							</p>
							<div className='pl-6 mb-4'>
								<ul className='list-disc'>
									<li>
										<strong>Plan:</strong> {user?.dataSms?.namePlan}
									</li>
									<li>
										<strong>Precio:</strong>{' '}
										{formatPrice(user?.dataSms?.price + '')}
									</li>
									<li>
										<strong>Total a pagar:</strong>{' '}
										{formatPrice(user?.dataSms?.total + '')}
									</li>
								</ul>
							</div>
							<div className='pl-6 mb-4'>
								<strong>Métodos de pago</strong>
								<ul className='list-disc'>
									<li>Ahorros Bancolombia: 007-363929-17</li>
									<li>Nequi: 3007623748</li>
								</ul>
							</div>
							<p>
								<strong>Por favor</strong>, debes enviar una foto del
								comprobante de pago al <strong>300 7492396</strong>, para que
								podamos verificar el pago.
							</p>
							<p>
								¡No dejes pasar esta oportunidad! Renueva ahora y sigue
								disfrutando de todos los beneficios que ofrecemos.
							</p>
							<p>Gracias por ser parte de nuestra comunidad.</p>
							<p>Atentamente, Equipo Tu Parqueadero</p>
							<p>
								Si tienes alguna pregunta o necesitas ayuda con el proceso de
								renovación, no dudes en ponerte en contacto con nuestro equipo
								de soporte al <strong>300 7492396</strong> Estamos aquí para
								ayudarte en cualquier momento.
							</p>
						</div>
					)}
				</DialogBody>
			</Dialog>
		</ThemeProvider>
	);
};
