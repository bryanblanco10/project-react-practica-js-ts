import { CardTable } from "@/components";
import { useEnterprises } from "./hooks";

export const Enterprise = () => {
	const module = 'module-enterprise';
	const moduleUuid = "53a1c6b6-b2f6-4137-8838-98174e655120";
	const { isLoading, records } = useEnterprises();

	return (
		<div className='py-5 px-3 lg:px-0'>
			<CardTable
				title='Empresas'
				rows={records}
				module={module}
				isLoading={isLoading}
				isActions={true}
				moduleUuid={moduleUuid}
			/>
		</div>
	);
};
