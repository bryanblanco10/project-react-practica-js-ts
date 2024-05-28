import { CardTable } from "@/components";
import { useSellerApps } from "./hooks";

export const SellerApp = () => {
	const module = 'module-seller';
	const moduleUuid = "b17d9595-39ef-4d83-8ec6-3003045f6125";
	const {isLoading, records} = useSellerApps();
	
	return (
		<div className='py-5 px-3 lg:px-0'>
			<CardTable
				title='Vendedores App'
				rows={records}
				module={module}
				isLoading={isLoading}
				isActions={true}
				moduleUuid={moduleUuid}
			/>
		</div>
	)
};
