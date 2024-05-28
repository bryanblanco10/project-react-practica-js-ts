import { Outlet, ScrollRestoration } from 'react-router-dom';
import { FooterApp, NavbarApp } from './components';

export const App = () => {
	return (
		<>
			<NavbarApp />
			<div className='min-h-screen'>
				<Outlet />
				<ScrollRestoration />
			</div>
			<FooterApp />
		</>
	);
};
