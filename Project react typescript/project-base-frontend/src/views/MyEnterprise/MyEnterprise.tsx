import { Card, CardBody, Typography } from '@material-tailwind/react';
import { FormMyEnterprise } from './components';
import { useEnterprise } from './hooks';

export const MyEnterprise = () => {
	const { enterprise } = useEnterprise();
	return (
		<div className='flex justify-center p-4'>
			<Card className='mt-6 w-full'>
				<CardBody>
					<Typography variant='h5' color='blue-gray' className='mb-2'>
						{enterprise?.name ? enterprise?.name : 'Cargando...'}
					</Typography>
					<FormMyEnterprise />
				</CardBody>
			</Card>
		</div>
	);
};
