import { useAuth } from '@/hooks';
import { Navigate, Outlet } from 'react-router-dom';

export const ProtectedRoutes = () => {
	const { isAuthenticate } = useAuth();

	if (!isAuthenticate) {
		return <Navigate to={'/iniciar-sesion'} />;
	}

	return <Outlet />;
};
