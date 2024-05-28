import { DashboardNavbar, ModalExpiredToken, ModalRenovationPlan, ModalSessionFinish, Sidebar } from '@/components';
import { useAuthStore } from '@/store';
import { useEffect, useState } from 'react';
import { Outlet, ScrollRestoration, useNavigate } from 'react-router-dom';

export const Layout = () => {
	const { user, setIsModal, isModal } = useAuthStore();
	const navigate = useNavigate();
	const [isOpenModalRenovation, setIsOpenModalRenovation] = useState(false);

	const handleOpenModalRenovation = () => {
		setIsOpenModalRenovation(!isOpenModalRenovation);
		setIsModal(false);
	}

	useEffect(() => {
		if (user.isFisrtSession) navigate('/cambiar-contraseña');

		if(isModal) handleOpenModalRenovation();
	}, []);

	return (
		<div className='min-h-screen bg-blue-gray-50/50'>
			<Sidebar />

			<div className='p-0 lg:p-4 xl:ml-80'>
				<ModalRenovationPlan handleModalRenovation={handleOpenModalRenovation} isOpen={isOpenModalRenovation} />
				<ModalExpiredToken />
				<ModalSessionFinish />
				<DashboardNavbar />

				<div className='p-0 lg:p-4 relative'>
					<Outlet />
					<ScrollRestoration />
				</div>
			</div>
		</div>
	);
};
