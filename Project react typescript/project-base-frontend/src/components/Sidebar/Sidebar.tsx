import { useAuth } from '@/views';
import {} from '..';
import { SidebarDesktop, SidebarMobile } from './components';
import { NavList } from './types';
import { useState, useMemo } from 'react';
import menus from './menu.json';
import { useHasPermission } from '@/hooks';
interface Module {
	name: string;
	path: string;
	moduleUuid: string;
	typeMenu: string;
}
export const Sidebar = () => {
	const { user } = useAuth();
	const { hasPermission } = useHasPermission();
	const [navList, setNavList] = useState<NavList[]>([
		{
			path: '/',
			name: 'Inicio',
		},
	]);

	useMemo(() => {
		if (user) {
			setNavList([
				{
					path: '/',
					name: 'Inicio',
				},
			]);
			const modules: NavList[] = [];
			menus.forEach((element: Module) => {
				if (hasPermission(element?.moduleUuid, element.typeMenu))
					modules.push({
						path: element.path,
						name: element?.name,
					});
			});
			setNavList(value => [...value, ...modules]);
		}
	}, [user]);

	const activeClassName = {
		backgroundColor: '#FDD32E',
		borderRadius: '0.5rem',
		color: 'black',
	};

	return (
		<>
			<SidebarDesktop
				navList={navList}
				activeClassName={activeClassName}
				name={user?.enterprise ? user?.enterprise?.name : 'Tu Parqueadero'}
			/>
			<SidebarMobile
				navList={navList}
				activeClassName={activeClassName}
				name={user?.enterprise ? user?.enterprise?.name : 'Tu Parqueadero'}
			/>
		</>
	);
};
