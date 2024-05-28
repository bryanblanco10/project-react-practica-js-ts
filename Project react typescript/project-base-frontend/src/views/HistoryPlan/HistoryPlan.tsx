import { CardTable } from '@/components';
import { useParams } from 'react-router-dom';
import { useAllPaymentsByEnterprise } from './hooks';

export const HistoryPlanView = () => {
	const module = 'module-history-plan';
	const moduleUuid = '3dc8ce3f-cdee-4f48-9b4e-c9573d5926e4';
	const { records, isLoading } = useAllPaymentsByEnterprise();
	const { uuid } = useParams();
	
	return (
		<div className='py-5 px-3 lg:px-0'>
			<CardTable
				title='Historial de Pagos'
				rows={records}
				module={module}
				isLoading={isLoading}
				isActions={false}
				uuid={uuid}
				moduleUuid={moduleUuid}
			/>
		</div>
	);
};
