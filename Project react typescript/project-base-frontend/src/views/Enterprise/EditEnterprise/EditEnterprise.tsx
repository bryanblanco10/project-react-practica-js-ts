import { CardBase } from "@/components";
import { FormEnterprise } from "../components";

export const EditEnterprise = () => {
	return (
		<div className='py-5 px-3 lg:px-0'>
			<CardBase
				redirect='/empresas'
				title='Actualizar Empresa'
				subtitle='Actualización de Empresa'
			>
				<FormEnterprise isDetail={false} />
			</CardBase>
		</div>
	);
};
