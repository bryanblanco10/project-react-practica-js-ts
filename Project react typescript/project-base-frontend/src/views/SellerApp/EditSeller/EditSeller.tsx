import { CardBase } from "@/components"
import { FormSeller } from "../components";

export const EditSeller = () => {
	return (
		<div className='py-5 px-3 lg:px-0'>
			<CardBase
				redirect='/vendedores-app'
				title='Actualizar Vendedor App'
				subtitle='Actualización de Vendedor App'
			>
				<FormSeller isDetail={false} />
			</CardBase>
		</div>
	);
};
