import {
	ChevronDownIcon,
	ListBulletIcon,
	PowerIcon,
	UserCircleIcon,
} from '@heroicons/react/24/outline';
import {
	Avatar,
	Button,
	Menu,
	MenuHandler,
	MenuItem,
	MenuList,
	Typography,
} from '@material-tailwind/react';
import { createElement, useState } from 'react';
import { Link } from 'react-router-dom';

// profile menu component
const profileMenuItems = [
	{
		label: 'Mi perfil',
		icon: UserCircleIcon,
		path: '/profile',
	},
	{
		label: 'Mis torneos',
		icon: ListBulletIcon,
		path: '/mis-torneos',
	},
	{
		label: 'Cerrar sesión',
		icon: PowerIcon,
		path: '/logout',
	},
];

export const ProfileMenu = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const closeMenu = () => setIsMenuOpen(false);

	return (
		<Menu open={isMenuOpen} handler={setIsMenuOpen} placement='bottom-end'>
			<MenuHandler>
				<Button
					variant='text'
					color='blue-gray'
					className='flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5'
				>
					<Avatar
						variant='circular'
						size='sm'
						alt='tania andrew'
						className='border border-gray-900 p-0.5'
						src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80'
					/>
					<ChevronDownIcon
						strokeWidth={2.5}
						className={`h-3 w-3 transition-transform ${
							isMenuOpen ? 'rotate-180' : ''
						}`}
					/>
				</Button>
			</MenuHandler>
			<MenuList className='p-1'>
				{profileMenuItems.map(({ label, icon, path }, key) => {
					const isLastItem = key === profileMenuItems.length - 1;
					return (
						<Link to={path} key={label} className='border-0'>
							<MenuItem
								onClick={closeMenu}
								className={`flex items-center gap-2 rounded ${
									isLastItem
										? 'hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10'
										: ''
								}`}
							>
								{createElement(icon, {
									className: `h-4 w-4 ${isLastItem ? 'text-red-500' : ''}`,
									strokeWidth: 2,
								})}
								<Typography
									as='span'
									variant='small'
									className='font-normal'
									color={isLastItem ? 'red' : 'inherit'}
								>
									{label}
								</Typography>
							</MenuItem>
						</Link>
					);
				})}
			</MenuList>
		</Menu>
	);
};
