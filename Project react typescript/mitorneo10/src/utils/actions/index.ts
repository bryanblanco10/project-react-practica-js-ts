import { Columns } from '@/components/TableComponent/types';

export interface Action {
	module: {
		path: string;
	};
	create: {
		path: string;
		permission: boolean;
	};
	detail: {
		path: string;
		permission: boolean;
	};
	update: {
		path: string;
		permission: boolean;
	};
	delete: {
		permission: boolean;
	};
}

export interface ModuleAction {
	headers: Columns[];
	actions: Action;
}

interface ModuleActions {
	[module: string]: ModuleAction;
}

export const moduleActions: ModuleActions = {
	'module-voter': {
		headers: [
			{
				name: 'Cédula',
				selector: (row: { identication: any }) => row.identication,
				sortable: true,
			},
			{
				name: 'Nombres',
				selector: (row: { names: any }) => row.names,
				sortable: true,
			},
			{
				name: 'Apellidos',
				selector: (row: { lastnames: any }) => row.lastnames,
				sortable: true,
			},
			{
				name: 'Celular',
				selector: (row: { cellphone: any }) => row.cellphone,
				sortable: true,
			},
			{
				name: 'Lider',
				selector: (row: { leader: any }) => row.leader,
				sortable: true,
			},
		],
		actions: {
			module: {
				path: '/votantes',
			},
			create: {
				path: '/crear-votante',
				permission: true,
			},
			detail: {
				path: '/detalle-votante',
				permission: true,
			},
			update: {
				path: '/editar-votante',
				permission: true,
			},
			delete: {
				permission: true,
			},
		},
	},
};
