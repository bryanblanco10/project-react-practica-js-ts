import { Button } from '@material-tailwind/react';
import { Link } from 'react-router-dom';

export const ErrorView = () => {
	return (
		<div className='flex justify-center flex-col items-center pt-10 px-3'>
			<h1 className='text-6xl font-black mb-8 mt-6'>404 NOT FOUND</h1>
			<h2 className='text-3xl text-center'>
				Ooops, la pagína que buscas no existe no existe
			</h2>
			<div className='mt-8'>
				<Link to='/'>
					<Button>Ir al inicio</Button>
				</Link>
			</div>
		</div>
	);
};
