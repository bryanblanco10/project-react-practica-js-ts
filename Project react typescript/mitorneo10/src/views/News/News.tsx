import { CardNew } from './components';

export const News = () => {
	return (
		<div className='container md:mx-auto px-6 py-12'>
			<div className='mb-8'>
				<h1 className='text-3xl font-semibold'>Noticias</h1>
			</div>
			<div className='flex flex-col gap-y-6'>
				<CardNew />
				<CardNew />
			</div>
		</div>
	);
};
