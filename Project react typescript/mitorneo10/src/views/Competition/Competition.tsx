import { CardCompetition, SelectMunicipality } from './components';

export const Competition = () => {
	return (
		<div className='container md:mx-auto px-3 py-12'>
			<div className='mb-8 flex flex-col md:flex-row md:justify-between'>
				<h1 className='text-3xl font-semibold'>Torneos</h1>
				<div className='mt-4 md:mt-0'>
					<SelectMunicipality />
				</div>
			</div>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 md:gap-x-6'>
				<CardCompetition />
			</div>
		</div>
	);
};
