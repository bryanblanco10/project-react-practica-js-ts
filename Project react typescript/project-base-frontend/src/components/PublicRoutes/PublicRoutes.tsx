import { useAuth } from '@/views/Auth/hooks';
import { Navigate } from 'react-router-dom';

interface Props {
	children: React.ReactElement;
}
export const PublicRoutes = ({ children }: Props) => {
	const { isAuthenticate } = useAuth();

	if (isAuthenticate) {
		return <Navigate to='/' />;
	}

	return <>{children}</>;
};
