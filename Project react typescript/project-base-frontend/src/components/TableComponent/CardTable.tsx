import { PlusIcon } from '@heroicons/react/24/outline';

import {
	Button,
	Card,
	CardBody,
	CardHeader,
	Typography,
} from '@material-tailwind/react';

import { useHasPermission, useModuleActions } from '@/hooks';
import { Link } from 'react-router-dom';
import { TableComponent } from './components/TableComponent';
import { Table } from './types';

interface Props extends Table {
	module: string;
	uuid?: string;
	isLoading: boolean;
	isActions: boolean;
	isLoadingDelete?: boolean
	uuidDelete?: string;
	moduleUuid: string;
	deleteRecord?: (uuid: string) => void;
	printRecord?: (uuid: string) => void;
}
export const CardTable = ({
	title,
	rows,
	module,
	isLoading,
	isActions,
	isLoadingDelete,
	uuidDelete,
	moduleUuid,
	uuid,
	deleteRecord,
	printRecord,
}: Props) => {
	const { headers, actions } = useModuleActions({ module });
	const { hasPermission } = useHasPermission();

	return (
		<Card className='h-full w-full'>
			<CardHeader floated={false} shadow={false} className='rounded-none'>
				<div className='mb-8 flex items-center justify-between gap-8'>
					<div>
						<Typography variant='h5' color='blue-gray'>
							{title}
						</Typography>
						<Typography color='gray' className='mt-1 font-normal'>
							Listado de {title}
						</Typography>
					</div>
					{actions?.create?.permission && hasPermission(moduleUuid, 'new') && (
						<div className='flex shrink-0 flex-col gap-2 sm:flex-row'>
							<Link to={uuid ? `${actions?.create?.path}/${uuid}` : `${actions?.create?.path}`}>
								<Button
									className='flex items-center gap-2'
									size='sm'
									color='green'
								>
									<PlusIcon strokeWidth={2} className='h-4 w-4' /> Nuevo
								</Button>
							</Link>
						</div>
					)}
				</div>
			</CardHeader>
			<CardBody className='px-2'>
				<TableComponent
					headers={headers}
					actions={actions}
					rows={rows}
					isLoading={isLoading}
					isActions={isActions}
					isLoadingDelete={isLoadingDelete}
					uuidDelete={uuidDelete}
					uuidEnterprise={uuid}
					moduleUuid={moduleUuid}
					deleteRecord={deleteRecord}
					printRecord={printRecord}
				/>
			</CardBody>
		</Card>
	);
};
