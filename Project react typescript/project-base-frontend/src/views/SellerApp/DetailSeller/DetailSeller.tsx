import { CardBase } from "@/components";
import { FormSeller } from "../components";

export const DetailSeller = () => {
	return (
		<div className='py-5 px-3 lg:px-0'>
			<CardBase
				redirect='/vendedores-app'
				title='Detalle Vendedor App'
				subtitle='Detalles del Vendedor App'
			>
				<FormSeller isDetail={true} />
			</CardBase>
		</div>
	);
};
