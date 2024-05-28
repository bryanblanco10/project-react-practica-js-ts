import { useHasPermission } from '@/hooks';
import { Action } from '@/utils';
import { CurrencyDollarIcon, EyeIcon, PencilIcon, PrinterIcon, TrashIcon } from '@heroicons/react/24/outline';
import { IconButton, Spinner, Tooltip } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

interface Props {
	uuid: string;
	actions: Action;
	isLoadingDelete?: boolean;
	uuidDelete?: string;
	status: boolean;
	moduleUuid: string;
	uuidEnterprise?: string;
	deleteRecord?: (uuid: string) => void;
	printRecord?: (uuid: string) => void;
}
export const Actions = ({
	uuid,
	actions,
	isLoadingDelete,
	uuidDelete,
	status,
	moduleUuid,
	uuidEnterprise,
	deleteRecord,
	printRecord,
}: Props) => {
	const navigate = useNavigate();
	const { hasPermission } = useHasPermission();
	const handleDetail = () => {
		console.log(uuidEnterprise)
		uuidEnterprise ? navigate(`${actions?.detail?.path}/${uuid}/${uuidEnterprise}`) : navigate(`${actions?.detail?.path}/${uuid}`);
	};
	const handleEdit = () => {
		uuidEnterprise ? navigate(`${actions?.update?.path}/${uuid}/${uuidEnterprise}`) : navigate(`${actions?.update?.path}/${uuid}`);
	};
	const handleDelete = () => {
		handleDeleteWithSwal();
	};

	const handlePrint = () => {
		printRecord && printRecord(uuid);
	}

	const handleDeleteWithSwal = () => {
    withReactContent(Swal).fire({
			title: "¿Estas seguro, que deseas eliminar este registro?",
			text: "No podras revertir esta accion",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Si, Eliminar",
			cancelButtonText: "Cancelar"
		}).then((result) => {
			if (result.isConfirmed) {
				deleteRecord && deleteRecord(uuid);
			}
		});
	}

	const handlePayment = () => {
		navigate(`${actions?.payment?.path}/${uuid}`);
	}

	return (
		<div className='flex items-center p-1'>
			{actions?.print?.permission && status && hasPermission(moduleUuid, 'detail') && (
				<Tooltip content='Ticket'>
					<IconButton
						size='sm'
						className='mr-2'
						onClick={handlePrint}
					>
						<PrinterIcon className='h-4 w-4' />
					</IconButton>
				</Tooltip>
			)}
			{actions?.detail?.permission && hasPermission(moduleUuid, 'detail') && (
				<Tooltip content='Ver'>
					<IconButton
						color='blue'
						size='sm'
						className='mr-2'
						onClick={handleDetail}
					>
						<EyeIcon className='h-4 w-4' />
					</IconButton>
				</Tooltip>
			)}
			{actions?.update?.permission && hasPermission(moduleUuid, 'edit') && (
				<Tooltip content='Editar'>
					<IconButton
						color='amber'
						size='sm'
						className='mr-2'
						onClick={handleEdit}
					>
						<PencilIcon className='h-4 w-4' />
					</IconButton>
				</Tooltip>
			)}
			{actions?.delete?.permission && hasPermission(moduleUuid, 'delete') && status && (
				<Tooltip content='Eliminar'>
					<IconButton color='red' size='sm' onClick={handleDelete} id={uuid}>
						{uuid === uuidDelete && isLoadingDelete ? (
							<Spinner className='h-4 w-4' />
						) : (
							<TrashIcon className='h-4 w-4' />
						)}
					</IconButton>
				</Tooltip>
			)}
			{actions?.payment?.permission && status && (
				<Tooltip content='Pagos'>
					<IconButton
						size='sm'
						className='mr-2'
						onClick={handlePayment}
					>
						<CurrencyDollarIcon className='h-4 w-4' />
					</IconButton>
				</Tooltip>
			)}
		</div>
	);
};
