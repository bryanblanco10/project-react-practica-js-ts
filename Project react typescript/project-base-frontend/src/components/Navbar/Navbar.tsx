import { useLayoutStore } from '@/store';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { IconButton, Navbar } from '@material-tailwind/react';
import { useEffect } from 'react';
import { ProfileMenu } from './components';
import { useAuth } from '@/views/Auth/hooks';
import { Link } from 'react-router-dom';

export const DashboardNavbar = () => {
	const mediaQuery = window.matchMedia('(max-width: 960px)');
	const { setVisible, isVisible } = useLayoutStore();
	const { user } = useAuth();

	mediaQuery.addEventListener('change', event => {
		validateMatches(event.matches);
	});

	const validateMatches = (value: boolean) => {
		if (value) setVisible(false);
	};

	useEffect(() => {
		validateMatches(mediaQuery.matches);
	}, []);

	return (
		<Navbar
			color={'white'}
			className='lg:rounded-xl transition-all sticky top-0 z-40 p-1 py-3 shadow-md shadow-blue-gray-500/5'
			fullWidth
		>
			<div className='flex justify-between lg:justify-end gap-6'>
				<div className='flex gap-x-4'>
				<IconButton
					variant='text'
					color='blue-gray'
					className='grid xl:hidden'
					onClick={() => setVisible(!isVisible)}
				>
					{isVisible ? (
						<XMarkIcon strokeWidth={3} className='h-6 w-6 text-blue-gray-500' />
					) : (
						<Bars3Icon strokeWidth={3} className='h-6 w-6 text-blue-gray-500' />
					)}
				</IconButton>
				<IconButton variant='outlined' className='border-[#FDD32E]'>
					<Link to='/'>
						<img src="/images/home.png" alt="Tu parqueadero" loading='lazy' />
					</Link>
				</IconButton>

				</div>
				<div className='flex items-center gap-x-1'>
					<div className='text-center'>
						<h1 className='text-black font-semibold text-sm md:text-base line-clamp-1 w-[150px]'>
							{user?.fullname}
						</h1>
						<h6 className='text-black text-sm'>{user?.profile?.name}</h6>
					</div>
					<ProfileMenu />
				</div>
			</div>
		</Navbar>
	);
};
