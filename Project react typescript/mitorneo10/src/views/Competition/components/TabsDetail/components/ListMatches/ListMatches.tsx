import { ItemMatch } from './components';

export const ListMatches = () => {
	return (
		<div className='mt-3'>
			<div className='bg-gray-300 p-1 mb-2'>
				<h1 className='text-black font-semibold text-base pl-3'>Jornada 1</h1>
			</div>
			<div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-x-4 gap-y-2'>
				<ItemMatch />
				<ItemMatch />
				<ItemMatch />
				<ItemMatch />
				<ItemMatch />
				<ItemMatch />
				<ItemMatch />
			</div>
		</div>
	);
};
