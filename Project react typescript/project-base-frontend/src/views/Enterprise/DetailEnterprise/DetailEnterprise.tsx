import { CardBase } from "@/components";
import { FormEnterprise } from "../components";

export const DetailEnterprise = () => {
	return (
		<div className='py-5 px-3 lg:px-0'>
			<CardBase
				redirect='/empresas'
				title='Detalle Empresa'
				subtitle='Detalles del Empresa'
			>
				<FormEnterprise isDetail={true} />
			</CardBase>
		</div>
	);
};
