import { useLayoutStore } from '@/store';
import { List, ListItem } from '@material-tailwind/react';
import { Link, NavLink } from 'react-router-dom';
import { ActiveClassName, NavList } from '../../types';

interface Props {
	navList: NavList[];
	activeClassName: ActiveClassName;
	name: string;
}

export const SidebarDesktop = ({ navList, activeClassName, name }: Props) => {
	const { setVisible } = useLayoutStore();
	return (
		<aside
			className={`bg-white shadow-lg overflow-y-auto overflow-x-hidden fixed top-20 lg:top-0 inset-0 z-50 my-4 ml-4 h-[calc(100vh-32px)] w-72 rounded-xl transition-transform duration-300 -translate-x-80 xl:translate-x-0 p-4`}
		>
			<div className='mb-2 flex items-center gap-4 p-4'>
				<Link to='/' className='flex items-center gap-x-2'>
					<div>
						<img src="/images/logo.png" alt="Tu Parqueadero" loading='lazy' />
					</div>
					<h1 className='text-lg py-1 px-1 line-clamp-1 uppercase'>{name}</h1>
				</Link>
			</div>
			<List>
				{navList.map((item: NavList) => (
					<NavLink
						to={item?.path}
						key={item?.name}
						onClick={() => setVisible(false)}
						style={({ isActive }) => (isActive ? activeClassName : undefined)}
					>
						<ListItem className='focus:bg-[#29ae5d] focus:bg-opacity-100 focus:text-white'>
							{item?.name}
						</ListItem>
					</NavLink>
				))}
			</List>
		</aside>
	);
};
