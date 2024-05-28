import 'react-data-table-component-extensions/dist/index.css';
import '../table.css';
import { ArrowDownIcon } from '@heroicons/react/24/solid';
import { Actions } from './Actions';
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import { ModuleAction } from '@/utils';
import { Spinner } from '@material-tailwind/react';

interface Props extends ModuleAction {
	rows: any[];
	isLoading: boolean;
	isActions: boolean;
	isLoadingDelete?: boolean;
	uuidDelete?: string;
	uuidEnterprise?: string;
	moduleUuid: string;
	deleteRecord?: (uuid: string) => void;
	printRecord?: (uuid: string) => void;
}
export const TableComponent = ({
	headers,
	rows,
	actions,
	isLoading,
	isActions,
	isLoadingDelete,
	uuidDelete,
	moduleUuid,
	uuidEnterprise,
	deleteRecord,
	printRecord,
}: Props) => {
	const columns = [...headers];

	if (isActions) {
		columns.push({
			name: 'Acciones',
			button: true,
			width: '130px',
			cell: (row: any) => (
				<Actions
					uuid={row.uuid}
					status={row.status}
					actions={actions}
					isLoadingDelete={isLoadingDelete}
					uuidDelete={uuidDelete}
					moduleUuid={moduleUuid}
					uuidEnterprise={uuidEnterprise}
					deleteRecord={deleteRecord}
					printRecord={printRecord}
				/>
			),
		});
	}

	const tableData = {
		columns,
		data: rows,
	};

	// const paginationComponentOptions = {
	// 	rowsPerPageText: 'Filas por página:',
	// 	rangeSeparatorText: 'de',
	// 	noRowsPerPage: false,
	// 	selectAllRowsItem: false,
	// 	selectAllRowsItemText: 'All',
	// };

	// const paginationRowsPerPageOptions = [50, 100, 200];

	return (
		<DataTableExtensions
			{...tableData}
			filterPlaceholder='Buscar'
			export={false}
			print={false}
		>
			<DataTable
				persistTableHead
				dense
				columns={headers}
				data={rows}
				defaultSortAsc={true}
				sortIcon={<ArrowDownIcon />}
				highlightOnHover
				progressPending={isLoading}
				noDataComponent={<p className='p-4'>No hay registros para mostrar</p>}
				progressComponent={
					<div className='p-4'>
						<Spinner color='amber' className='h-10 w-10' />
					</div>
				}
			/>
		</DataTableExtensions>
	);
};
