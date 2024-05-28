import { PublicRoutes } from '@/components';
import { SignIn, SignUp } from '@/views/Auth';
import { createBrowserRouter } from 'react-router-dom';
export const router = createBrowserRouter([
	{
		path: '/iniciar-sesion',
		element: (
			<PublicRoutes>
				<SignIn />
			</PublicRoutes>
		),
	},
	{
		path: '/registro',
		element: (
			<PublicRoutes>
				<SignUp />
			</PublicRoutes>
		),
	},
	{
		path: '/',
		async lazy() {
			const { App } = await import(/* webpackChunkName: 'App' */ '@/App');
			return {
				Component: App,
			};
		},
		children: [
			{
				path: '/',
				async lazy() {
					const { Home } = await import(
						/* webpackChunkName: 'Home' */ '@/views'
					);
					return {
						Component: Home,
					};
				},
			},
			{
				path: '/noticias',
				async lazy() {
					const { News } = await import(
						/* webpackChunkName: 'News' */ '@/views'
					);
					return {
						Component: News,
					};
				},
			},
			{
				path: '/torneos',
				async lazy() {
					const { Competition } = await import(
						/* webpackChunkName: 'Competition' */ '@/views'
					);
					return {
						Component: Competition,
					};
				},
			},
			{
				path: '/torneo-detalle',
				async lazy() {
					const { DetailCompetition } = await import(
						/* webpackChunkName: 'DetailCompetition' */ '@/views'
					);
					return {
						Component: DetailCompetition,
					};
				},
			},
			{
				path: '/mis-torneos',
				async lazy() {
					const { ListCompetition } = await import(
						/* webpackChunkName: 'ListCompetition' */ '@/views'
					);
					return {
						Component: ListCompetition,
					};
				},
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
