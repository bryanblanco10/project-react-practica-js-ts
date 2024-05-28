
import { Columns } from '@/components/TableComponent/types';
import { formatPrice } from '../format';
import { ChipStatus } from '@/components';

export interface Action {
	module: {
		path: string;
	};
	create?: {
		path: string;
		permission: boolean;
	};
	detail?: {
		path: string;
		permission: boolean;
	};
	update?: {
		path: string;
		permission: boolean;
	};
	delete?: {
		permission: boolean;
	};
	print?: {
		permission: boolean;
	};
	payment?: {
		path: string;
		permission: boolean;
	}
}

export interface ModuleAction {
	headers: Columns[];
	actions: Action;
}

interface ModuleActions {
	[module: string]: ModuleAction;
}

// interface DateTime {
// 	hours: { hours: number; minutes: number; } | null 
// 	days: { days: number; hours: number; } | null 
// }

export const moduleActions: ModuleActions = {
	'module-owner': {
		headers: [
			{
				name: 'Nombres',
				selector: (row: { names: string }) => row.names,
				sortable: true,
			},
			{
				name: 'Apellidos',
				selector: (row: { last_names: string }) => row.last_names,
				sortable: true,
			},
			{
				name: 'Identificación',
				selector: (row: { identification: string }) => row.identification,
				sortable: true,
			},
			{
				name: 'Celular',
				selector: (row: { cellphone: string }) => row.cellphone,
				sortable: true,
			},
			{
				name: 'Empresa',
				selector: (row: { enterprise: any[] }) => row.enterprise[0].name,
				sortable: true,
			},
			{
				name: 'Estado',
				sortable: true,
				cell: (row: any) => (
					<ChipStatus
						status={row?.status}
						message1='Activo'
						message2='Inactivo'
					/>
				),
			},
		],
		actions: {
			module: {
				path: '/propietarios',
			},
			create: {
				path: '/crear-propietario',
				permission: true,
			},
			update: {
				path: '/actualizar-propietario',
				permission: true,
			},
			detail: {
				path: '/detalle-propietario',
				permission: true,
			},
			delete: {
				permission: false,
			},
		},
	},
	'module-employee': {
		headers: [
			{
				name: 'Nombres',
				selector: (row: { names: string }) => row.names,
				sortable: true,
				width: '200px',
			},
			{
				name: 'Apellidos',
				selector: (row: { last_names: string }) => row.last_names,
				sortable: true,
				width: '200px',
			},
			{
				name: 'Identificación',
				selector: (row: { identification: string }) => row.identification,
				sortable: true,
			},
			{
				name: 'Celular',
				selector: (row: { cellphone: string }) => row.cellphone,
				sortable: true,
			},
			{
				name: 'Usuario',
				selector: (row: { user: { username: string } }) => row.user.username,
				sortable: true,
				width: '200px',
			},
			{
				name: 'Estado',
				sortable: true,
				cell: (row: any) => (
					<ChipStatus
						status={row?.status}
						message1='Activo'
						message2='Inactivo'
					/>
				),
			},
		],
		actions: {
			module: {
				path: '/empleados',
			},
			create: {
				path: '/crear-empleado',
				permission: true,
			},
			update: {
				path: '/actualizar-empleado',
				permission: true,
			},
			detail: {
				path: '/detalle-empleado',
				permission: true,
			},
			delete: {
				permission: false,
			},
		},
	},
	'module-seller': {
		headers: [
			{
				name: 'Nombres',
				selector: (row: { fullname: string }) => row.fullname,
				sortable: true,
			},
			{
				name: 'Usuario',
				selector: (row: { username: string }) => row.username,
				sortable: true,
			},
			{
				name: 'Email',
				selector: (row: { email: string }) => row.email,
				sortable: true,
			},
			{
				name: 'Perfil',
				selector: (row: { profile: { name: string } }) => row?.profile?.name,
				sortable: true,
			},
			{
				name: 'Estado',
				sortable: true,
				cell: (row: any) => (
					<ChipStatus
						status={row?.status}
						message1='Activo'
						message2='Inactivo'
					/>
				),
			},
		],
		actions: {
			module: {
				path: '/vendedores-app',
			},
			create: {
				path: '/crear-vendedor-app',
				permission: true,
			},
			update: {
				path: '/actualizar-vendedor-app',
				permission: true,
			},
			detail: {
				path: '/detalle-vendedor-app',
				permission: true,
			},
			delete: {
				permission: true,
			},
		},
	},
	'module-enterprise': {
		headers: [
			{
				name: 'Nombre',
				selector: (row: { name: string }) => row?.name,
				sortable: true,
				width: '200px'
			},
			{
				name: 'Nit',
				selector: (row: { nit: string }) => row?.nit,
				sortable: true,
			},
			{
				name: 'Celular',
				selector: (row: { cellphone: string }) => row?.cellphone,
				sortable: true,
			},
			{
				name: 'Departamento',
				selector: (row: { municipality: { department: { name: string } } }) => row?.municipality?.department?.name,
				sortable: true,
			},
			{
				name: 'Municipio',
				selector: (row: { municipality: { name: string } }) => row?.municipality?.name,
				sortable: true,
			},
			{
				name: 'En Mora',
				selector: (row:  { is_debt: boolean }) => row?.is_debt ? 'Si' : 'No',
				sortable: true,
			},
			{
				name: 'Estado',
				sortable: true,
				cell: (row: any) => (
					<ChipStatus
						status={row?.status}
						message1='Activo'
						message2='Inactivo'
					/>
				),
			},
		],
		actions: {
			module: {
				path: '/empresas',
			},
			update: {
				path: '/actualizar-empresa',
				permission: true,
			},
			detail: {
				path: '/detalle-empresa',
				permission: true,
			},
			delete: {
				permission: false,
			},
			payment: {
				path: '/historial-de-pagos',
				permission: true,
			}
		},
	},
	'module-history-plan': {
		headers: [
			{
				name: 'Plan',
				selector: (row: { planEnterprisePrice: { planEnterprise: { name: string}} }) => row?.planEnterprisePrice?.planEnterprise?.name,
				width: '200px'
			},
			{
				name: 'Precio plan',
				selector: (row: { planEnterprisePrice: { price: number, type: string } }) => `${formatPrice(row?.planEnterprisePrice?.price + '')} ${row?.planEnterprisePrice?.type}`,
				width: '200px'
			},
			{
				name: 'Fecha inicial',
				selector: (row: { initial_date: string }) => row?.initial_date,
				sortable: true,
				width: '150px'
			},
			{
				name: 'Fecha final',
				selector: (row: { final_date: string }) => row?.final_date,
				sortable: true,
				width: '150px'
			},
			{
				name: 'Método de pago',
				selector: (row: { payment_method: string }) => row?.payment_method,
				sortable: true,
			},
			{
				name: 'Descuento',
				selector: (row: { discount: number }) => formatPrice(row?.discount + '')
			},
			{
				name: 'Total',
				selector: (row: { total: number }) => formatPrice(row?.total + ''),
				sortable: true,
			},
			{
				name: 'Estado',
				sortable: true,
				cell: (row: any) => (
					<ChipStatus
						status={row?.status}
						message1='Activo'
						message2='Inactivo'
					/>
				),
			},
		],
		actions: {
			module: {
				path: '/historial-de-pagos',
			},
			create: {
				path: '/crear-pago',
				permission: true,
			},
			update: {
				path: '/actualizar-pago',
				permission: true,
			},
			detail: {
				path: '/detalle-pago',
				permission: true,
			},
			delete: {
				permission: false,
			},
		},
	},
};
