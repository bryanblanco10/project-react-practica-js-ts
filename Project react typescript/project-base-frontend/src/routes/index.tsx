import { ProtectedRoutes, PublicRoutes } from '@/components';
import { createBrowserRouter } from 'react-router-dom';
import { ChangePassword, Login, RecoveryPassword } from '../views/Auth';
export const router = createBrowserRouter([
	{
		path: '/iniciar-sesion',
		element: (
			<PublicRoutes>
				<Login />
			</PublicRoutes>
		),
	},
	{
		path: '/recuperar-cuenta',
		element: (
			<PublicRoutes>
				<RecoveryPassword />
			</PublicRoutes>
		),
	},
	{
		path: '/cambiar-contraseña',
		element: (<ChangePassword />),
	},
	{
		path: '/',
		element: <ProtectedRoutes />,
		children: [
			{
				path: '/',
				async lazy() {
					const { Layout } = await import(
						/* webpackChunkName: 'Layout' */ '@/views'
					);
					return {
						Component: Layout,
					};
				},
				children: [
					{
						path: '/',
						async lazy() {
							const { Dashboard } = await import(
								/* webpackChunkName: 'Dashboard' */ '@/views'
							);
							return {
								Component: Dashboard,
							};
						},
					},
					{
						path: '/propietarios',
						async lazy() {
							const { Owner } = await import(
								/* webpackChunkName: 'Owner' */ '@/views'
							);
							return {
								Component: Owner,
							};
						},
					},
					{
						path: '/crear-propietario',
						async lazy() {
							const { CreateOwner } = await import(
								/* webpackChunkName: 'CreateOwner' */ '@/views'
							);
							return {
								Component: CreateOwner,
							};
						},
					},
					{
						path: '/actualizar-propietario/:uuid',
						async lazy() {
							const { EditOwner } = await import(
								/* webpackChunkName: 'EditOwner' */ '@/views'
							);
							return {
								Component: EditOwner,
							};
						},
					},
					{
						path: '/detalle-propietario/:uuid',
						async lazy() {
							const { DetailOwner } = await import(
								/* webpackChunkName: 'DetailOwner' */ '@/views'
							);
							return {
								Component: DetailOwner,
							};
						},
					},
					{
						path: '/mi-empresa',
						async lazy() {
							const { MyEnterprise } = await import(
								/* webpackChunkName: 'MyEnterprise' */ '@/views'
							);
							return {
								Component: MyEnterprise,
							};
						},
					},
					{
						path: '/empleados',
						async lazy() {
							const { Employee } = await import(
								/* webpackChunkName: 'Employee' */ '@/views'
							);
							return {
								Component: Employee,
							};
						},
					},
					{
						path: '/crear-empleado',
						async lazy() {
							const { CreateEmployee } = await import(
								/* webpackChunkName: 'CreateEmployee' */ '@/views'
							);
							return {
								Component: CreateEmployee,
							};
						},
					},
					{
						path: '/actualizar-empleado/:uuid',
						async lazy() {
							const { EditEmployee } = await import(
								/* webpackChunkName: 'EditEmployee' */ '@/views'
							);
							return {
								Component: EditEmployee,
							};
						},
					},
					{
						path: '/detalle-empleado/:uuid',
						async lazy() {
							const { DetailEmployee } = await import(
								/* webpackChunkName: 'DetailEmployee' */ '@/views'
							);
							return {
								Component: DetailEmployee,
							};
						},
					},
					{
						path: '/vendedores-app',
						async lazy() {
							const { SellerApp } = await import(
								/* webpackChunkName: 'SellerApp' */ '@/views'
							);
							return {
								Component: SellerApp,
							};
						}
					},
					{
						path: '/crear-vendedor-app',
						async lazy() {
							const { CreateSeller } = await import(
								/* webpackChunkName: 'CreateSeller' */ '@/views'
							);
							return {
								Component: CreateSeller,
							};
						}
					},
					{
						path: '/detalle-vendedor-app/:uuid',
						async lazy() {
							const { DetailSeller } = await import(
								/* webpackChunkName: 'DetailSeller' */ '@/views'
							);
							return {
								Component: DetailSeller,
							};
						}
					},
					{
						path: '/actualizar-vendedor-app/:uuid',
						async lazy() {
							const { EditSeller } = await import(
								/* webpackChunkName: 'EditSeller' */ '@/views'
							);
							return {
								Component: EditSeller,
							};
						}
					},
					{
						path: '/empresas',
						async lazy() {
							const { Enterprise } = await import(
								/* webpackChunkName: 'Enterprise' */ '@/views'
							);
							return {
								Component: Enterprise,
							};
						}
					},
					{
						path: '/actualizar-empresa/:uuid',
						async lazy() {
							const { EditEnterprise } = await import(
								/* webpackChunkName: 'EditEnterprise' */ '@/views'
							);
							return {
								Component: EditEnterprise,
							};
						}
					},
					{
						path: '/detalle-empresa/:uuid',
						async lazy() {
							const { DetailEnterprise } = await import(
								/* webpackChunkName: 'DetailEnterprise' */ '@/views'
							);
							return {
								Component: DetailEnterprise,
							};
						}
					},
					{
						path: '/historial-de-pagos/:uuid',
						async lazy() {
							const { HistoryPlan } = await import(
								/* webpackChunkName: 'HistoryPlan' */ '@/views'
							);
							return {
								Component: HistoryPlan,
							};
						}
					},
					{
						path: '/crear-pago/:uuidEnterprise',
						async lazy() {
							const { CreatePayment } = await import(
								/* webpackChunkName: 'CreatePayment' */ '@/views'
							);
							return {
								Component: CreatePayment,
							};
						},
					},
					{
						path: '/actualizar-pago/:uuid/:uuidEnterprise',
						async lazy() {
							const { EditPayment } = await import(
								/* webpackChunkName: 'EditPayment' */ '@/views'
							);
							return {
								Component: EditPayment,
							};
						},
					},
					{
						path: '/detalle-pago/:uuid/:uuidEnterprise',
						async lazy() {
							const { DetailPayment } = await import(
								/* webpackChunkName: 'DetailPayment' */ '@/views'
							);
							return {
								Component: DetailPayment,
							};
						},
					},
					{
						path: '/historial-de-pagos',
						async lazy() {
							const { HistoryPlanView } = await import(
								/* webpackChunkName: 'HistoryPlanView' */ '@/views'
							);
							return {
								Component: HistoryPlanView,
							};
						},
					},
				],
			},
		],
	},
	{
		path: '*',
		async lazy() {
			const { ErrorView } = await import(
				/* webpackChunkName: 'ErrorView' */ '@/views'
			);
			return {
				Component: ErrorView,
			};
		},
	},
]);
