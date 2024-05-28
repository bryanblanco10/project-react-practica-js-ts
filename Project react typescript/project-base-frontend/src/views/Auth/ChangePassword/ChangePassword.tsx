import { ArrowLongLeftIcon } from '@heroicons/react/24/outline';
import { Button } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import { FormChangePassword } from '..';

export const ChangePassword = () => {
	return (
		<>
			<div className='container md:mx-auto px-3 py-10 md:py-16'>
			<div className='flex shrink-0 flex-col gap-2 sm:flex-row mb-10'>
				<Link to='/iniciar-sesion'>
					<Button className='flex items-center gap-2' size='sm'>
						<ArrowLongLeftIcon strokeWidth={2} className='h-4 w-4' /> Atrás
					</Button>
				</Link>
			</div>
				<div className='flex items-center justify-around flex-col lg:flex-row'>
					<div className=''>
						<FormChangePassword />
					</div>
				</div>
			</div>
		</>
	);
};
