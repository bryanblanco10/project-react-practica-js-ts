import { useLayoutStore } from '@/store';
import { Drawer, IconButton, List, ListItem } from '@material-tailwind/react';
import { Link, NavLink } from 'react-router-dom';
import { ActiveClassName, NavList } from '../../types';

interface Props {
	navList: NavList[];
	activeClassName: ActiveClassName;
	name: string;
}

export const SidebarMobile = ({ navList, activeClassName, name }: Props) => {
	const { isVisible, setVisible } = useLayoutStore();

	const closeDrawer = () => setVisible(false);

	return (
		<Drawer open={isVisible} onClose={closeDrawer} className='p-4'>
			<div className='mb-6 flex items-center justify-between'>
				<Link to='/' className='flex items-center gap-x-2'>
					<div>
						<img src="/images/logo.png" alt="Tu Parqueadero" loading='lazy' />
					</div>
					<h1 className='text-xl py-1 px-1 line-clamp-1 uppercase'>{name}</h1>
				</Link>
				<IconButton variant='text' color='blue-gray' onClick={closeDrawer}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth={2}
						stroke='currentColor'
						className='h-5 w-5'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M6 18L18 6M6 6l12 12'
						/>
					</svg>
				</IconButton>
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
		</Drawer>
	);
};
