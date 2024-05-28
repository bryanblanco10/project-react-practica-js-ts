import { Outlet, ScrollRestoration } from 'react-router-dom';
export const App = () => {
	return (
		<>
			<Outlet />
			<ScrollRestoration />
		</>
	);
};
