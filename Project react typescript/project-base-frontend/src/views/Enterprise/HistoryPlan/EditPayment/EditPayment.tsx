import { CardBase } from "@/components";
import { FormPayment } from "../components";
import { useParams } from 'react-router-dom';

export const EditPayment = () => {
	const { uuidEnterprise } = useParams();

	return (
		<div className='py-5 px-3 lg:px-0'>
			<CardBase
				redirect={`/historial-de-pagos/${uuidEnterprise}`}
				title='Actualizar Pago'
				subtitle='Actualización de Pago'
			>
				<FormPayment isDetail={false} />
			</CardBase>
		</div>
	);
};
