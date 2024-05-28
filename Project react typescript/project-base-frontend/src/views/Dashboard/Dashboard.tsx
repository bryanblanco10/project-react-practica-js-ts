import { DatePickerComponent } from '@/components';
import { useAuthStore } from '@/store';
import { Spinner } from '@material-tailwind/react';
import 'react-datepicker/dist/react-datepicker.css';

export function CustomSpinner() {
	return <Spinner className='h-16 w-16 text-gray-900/50' />;
}

const DashboadSuperAdmin = () => {

	return (
		<div className='min-h-scree'>
			<div className='mt-6 pl-3'>
				<h1>DashboardSuperAdmin</h1>
			</div>
		</div>
	);
};

const DashboardAdmin = () => {
	return (
		<div className='min-h-scree'>
			<div className='mt-6 pl-3'>
				<DatePickerComponent handleRecords={() => {}} />
			</div>
		</div>
	);
};
export const Dashboard = () => {
	const { user } = useAuthStore();

	return (
		<>
			{user?.profile?.uuid === 'cda783bb-338c-41b4-912b-10c3d2c247e3' || user?.profile?.uuid === 'd3cc1602-d3a1-4a05-ac3f-a9762b17d531' && <DashboadSuperAdmin />}
			{user?.profile?.uuid !== 'cda783bb-338c-41b4-912b-10c3d2c247e3' && user?.profile?.uuid !== 'd3cc1602-d3a1-4a05-ac3f-a9762b17d531' && (
				<DashboardAdmin />
			)}
		</>
	);
};
