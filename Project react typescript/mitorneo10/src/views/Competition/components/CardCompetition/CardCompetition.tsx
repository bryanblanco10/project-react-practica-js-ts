import {
	Card,
	CardBody,
	CardHeader,
	Typography,
} from '@material-tailwind/react';
import { MapPinIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

export const CardCompetition = () => {
	return (
		<Link to='/torneo-detalle'>
			<Card className='mt-6 w-full lg:w-96'>
				<CardHeader color='blue-gray' className='relative h-auto'>
					<img src='/images/torneo.jpg' alt='torneo-de-mi-barrio' />
				</CardHeader>
				<CardBody>
					<div className='text-center'>
						<Typography variant='h4' color='blue-gray' className='mb-2'>
							Torneo B10
						</Typography>
						<Typography color='blue-gray' className='font-medium' textGradient>
							Medellin / Belén
						</Typography>
					</div>
					<div className='mt-2 flex justify-center flex-wrap gap-y-1 gap-x-1'>
						<span className='flex items-center'>
							<MapPinIcon className='h-6 w-6' />
							Cancha Colcafe
						</span>
						<span className='flex items-center'>
							<MapPinIcon className='h-6 w-6' />
							Cancha Envigado
						</span>
					</div>
				</CardBody>
			</Card>
		</Link>
	);
};
