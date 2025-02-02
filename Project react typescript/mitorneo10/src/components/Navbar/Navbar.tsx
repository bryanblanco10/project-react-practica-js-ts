import {
	Collapse,
	IconButton,
	Navbar,
	Typography,
} from '@material-tailwind/react';
import { useEffect, useState } from 'react';
import { ProfileMenu } from './components';
import { NavLink } from 'react-router-dom';

export const NavbarApp = () => {
	const [openNav, setOpenNav] = useState(false);

	useEffect(() => {
		window.addEventListener(
			'resize',
			() => window.innerWidth >= 960 && setOpenNav(false),
		);
	}, []);

	const navList = (
		<ul className='mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6'>
			<Typography
				as='li'
				variant='h6'
				color='blue-gray'
				className='p-1 font-medium'
			>
				<NavLink
					to='/'
					className='flex items-center hover:text-red-400 transition-colors'
				>
					Inicio
				</NavLink>
			</Typography>
			<Typography
				as='li'
				variant='h6'
				color='blue-gray'
				className='p-1 font-medium'
			>
				<NavLink
					to='/torneos'
					className='flex items-center hover:text-red-400 transition-colors'
				>
					Torneos
				</NavLink>
			</Typography>
			<Typography
				as='li'
				variant='h6'
				color='blue-gray'
				className='p-1 font-medium'
			>
				<NavLink
					to='/noticias'
					className='flex items-center hover:text-red-400 transition-colors'
				>
					Noticias
				</NavLink>
			</Typography>
		</ul>
	);

	return (
		<Navbar className='sticky top-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4'>
			<div className='flex items-center justify-between text-blue-gray-900'>
				<div className='flex items-center'>
					<IconButton
						variant='text'
						className='ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden mr-3'
						ripple={false}
						onClick={() => setOpenNav(!openNav)}
					>
						{openNav ? (
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								className='h-6 w-6'
								viewBox='0 0 24 24'
								stroke='currentColor'
								strokeWidth={2}
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M6 18L18 6M6 6l12 12'
								/>
							</svg>
						) : (
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='h-6 w-6'
								fill='none'
								stroke='currentColor'
								strokeWidth={2}
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M4 6h16M4 12h16M4 18h16'
								/>
							</svg>
						)}
					</IconButton>
					<Typography
						as='a'
						href='#'
						className='mr-4 cursor-pointer py-1.5 font-medium'
					>
						Mi Torneo B10
					</Typography>
				</div>
				<div className='flex items-center gap-4'>
					<div className='mr-4 hidden lg:block'>{navList}</div>
				</div>
				<ProfileMenu />
			</div>
			<Collapse open={openNav}>{navList}</Collapse>
		</Navbar>
	);
};
