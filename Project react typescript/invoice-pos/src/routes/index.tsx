import { createBrowserRouter } from 'react-router-dom';
export const router = createBrowserRouter([
	{
		path: '/',
		async lazy() {
			const { Home } = await import(/* webpackChunkName: 'Home' */ '@/views');
			return {
				Component: Home,
			};
		},
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
