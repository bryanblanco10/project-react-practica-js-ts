import { CardBase } from "@/components";
import { FormSeller } from "../components";

export const CreateSeller = () => {
	return (
		<div className='py-5 px-3 lg:px-0'>
			<CardBase
				redirect='/vendedores-app'
				title='Crear Vendedor App'
				subtitle='Registro de Vendedor App'
			>
				<FormSeller isDetail={false} />
			</CardBase>
		</div>
	);
};
