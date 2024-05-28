import { CardBase } from "@/components";
import { FormUpdateOwner } from "../components";


export const DetailOwner = () => {
	return (
		<div className='py-5 px-3 lg:px-0'>
			<CardBase
				redirect='/propietarios'
				title='Detalle Propietario'
				subtitle='Detalles del Propietario'
			>
				<FormUpdateOwner isDetail={true} />
			</CardBase>
		</div>
	);
};
