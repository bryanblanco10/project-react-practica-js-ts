import { Card, CardBody, Typography } from '@material-tailwind/react';
import { TabsDetail } from './components';
import { MapPinIcon } from '@heroicons/react/24/outline';

export const DetailCompetition = () => {
	return (
		<div className='container md:mx-auto px-3 py-8 flex justify-center'>
			<Card className='w-full lg:w-3/4'>
				<CardBody>
					<figure className='relative h-52 md:h-64 lg:h-80 w-full max-h-64 mb-6'>
						<img
							className='h-full w-full rounded-xl object-cover object-center'
							src='/images/background.jpg'
							alt='mi barrio'
						/>
						<figcaption className='absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-black bg-black/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm'>
							<div>
								<Typography variant='h5' color='white'>
									Mi Torneo
								</Typography>
								<Typography color='white' className='mt-2 font-normal'>
									Medellin / Belén
								</Typography>
								<div className='mt-2 flex justify-start md:justify-center flex-wrap gap-y-1 gap-x-1'>
									<span className='flex items-center text-white text-sm'>
										<MapPinIcon className='h-5 w-5 mr-1' />
										Cancha Colcafe
									</span>
									<span className='flex items-center text-white text-sm'>
										<MapPinIcon className='h-5 w-5 mr-1' />
										Cancha Envigado
									</span>
								</div>
							</div>
						</figcaption>
					</figure>
					<div className=''>
						<TabsDetail />
					</div>
				</CardBody>
			</Card>
		</div>
	);
};
