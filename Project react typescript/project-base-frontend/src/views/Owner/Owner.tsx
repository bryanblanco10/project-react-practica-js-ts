import { CardTable } from '@/components';
import { useOwners } from './hooks';

import { useEffect } from 'react';
import { connectSocket, disconnectSocket, listeningEvent, offEvent } from '@/socket';


export const Owner = () => {
	const module = 'module-owner';
	const moduleUuid = "dd4d30f5-0911-4a52-a0ff-3f0c6ed410b6";
	const { isLoading, records } = useOwners();

	const eventSocket = async () => {
		await listeningEvent("message");
	}

	useEffect(() => {
		connectSocket();
		eventSocket();
		return () => {
			disconnectSocket();
			offEvent("message");
		}
	}, [])

	return (
		<div className='py-5 px-3 lg:px-0'>
			<CardTable
				title='Propietarios'
				rows={records}
				module={module}
				isLoading={isLoading}
				isActions={true}
				moduleUuid={moduleUuid}
			/>
		</div>
	);
};
