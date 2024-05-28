import DataTable from 'react-data-table-component';
import 'react-data-table-component-extensions/dist/index.css';
import './table.css';
import { Columns } from './types';

interface Props {
	rows: any[];
	columns: Columns[];
}
export const TableComponent = ({ columns, rows }: Props) => {
	return (
		<DataTable
			fixedHeader
			dense
			persistTableHead
			columns={columns}
			data={rows}
			pagination={false}
			highlightOnHover
			noDataComponent={<p>No hay registros para mostrar</p>}
		/>
	);
};
