import { useAuth } from '@/views/Auth/hooks';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { PowerIcon } from '@heroicons/react/24/solid';
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
import { NavLink } from 'react-router-dom';

// profile menu component
const profileMenuItems = [
	{
		label: 'Cerrar sesión',
		icon: PowerIcon,
		path: null,
	},
];

export const ProfileMenu = () => {
	const { logout, user } = useAuth();

	const handleClick = () => {
		logout({ username: user?.username });
	};
	
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const closeMenu = (type: boolean) => {
		setIsMenuOpen(false);
		if (type) handleClick();
	};

	return (
		<Menu open={isMenuOpen} handler={setIsMenuOpen} placement='bottom-end'>
			<MenuHandler>
				<Button
					variant='text'
					color='blue-gray'
					className='flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto'
				>
					<Avatar
						variant='circular'
						size='sm'
						alt='tania andrew'
						className='border border-gray-900 p-0.5'
						src='/images/profile.png'
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
				<div className='pl-2 mt-2 mb-2 text-center'>
					<h4>Usuario</h4>
					<h1>{user?.username}</h1>
				</div>
				{profileMenuItems.map(({ label, icon, path }) => {
					return (
						<div key={label}>
							{path ? (
								<NavLink to={path} className='hover:border-none'>
									<MenuItem
										onClick={() => closeMenu(false)}
										className={`flex items-center gap-2 rounded hover:border-none`}
									>
										{createElement(icon, {
											className: `h-4 w-4`,
										})}
										<Typography
											as='span'
											variant='small'
											className='font-normal'
											color='inherit'
										>
											{label}
										</Typography>
									</MenuItem>
								</NavLink>
							) : (
								<MenuItem
									key={label}
									onClick={() => closeMenu(true)}
									className={`flex items-center hover:border-none gap-2 rounded hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10`}
								>
									{createElement(icon, {
										className: `h-4 w-4 text-red-500`,
										strokeWidth: 2,
									})}
									<Typography
										as='span'
										variant='small'
										className='font-normal'
										color='red'
									>
										{label}
									</Typography>
								</MenuItem>
							)}
						</div>
					);
				})}
			</MenuList>
		</Menu>
	);
};
