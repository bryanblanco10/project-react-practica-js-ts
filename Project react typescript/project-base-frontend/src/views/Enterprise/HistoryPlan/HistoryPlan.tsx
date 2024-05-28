import { CardTable } from '@/components';
import { usePayments } from './hooks';
import { useParams } from 'react-router-dom';

export const HistoryPlan = () => {
	const module = 'module-history-plan';
	const moduleUuid = '3dc8ce3f-cdee-4f48-9b4e-c9573d5926e4';
	const { records, isLoading } = usePayments();
	const { uuid } = useParams();
	
	return (
		<div className='py-5 px-3 lg:px-0'>
			<CardTable
				title='Historial de Pagos'
				rows={records}
				module={module}
				isLoading={isLoading}
				isActions={true}
				uuid={uuid}
				moduleUuid={moduleUuid}
			/>
		</div>
	);
};
