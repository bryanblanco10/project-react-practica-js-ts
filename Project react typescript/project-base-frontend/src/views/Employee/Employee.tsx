import { CardTable } from "@/components";
import { useEmployees } from "./hooks";

export const Employee = () => {
	const module = 'module-employee';
	const { isLoading, records } = useEmployees();
	const moduleUuid = "64f83b65-281b-4a14-beaa-2a13203de5f2";

	return (
		<div className='py-5 px-3 lg:px-0'>
			<CardTable
				title='Empleados'
				rows={records}
				module={module}
				isLoading={isLoading}
				isActions={true}
				moduleUuid={moduleUuid}
			/>
		</div>
	);
};
