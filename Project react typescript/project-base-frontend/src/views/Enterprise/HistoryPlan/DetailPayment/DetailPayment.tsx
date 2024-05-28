import { CardBase } from "@/components";
import { FormPayment } from "../components";
import { useParams } from 'react-router-dom';

export const DetailPayment = () => {
	const { uuidEnterprise } = useParams();

	return (
		<div className='py-5 px-3 lg:px-0'>
			<CardBase
				redirect={`/historial-de-pagos/${uuidEnterprise}`}
				title='Detalle de Pago'
				subtitle='Detalles del de Pago'
			>
				<FormPayment isDetail={true} />
			</CardBase>
		</div>
	);
};
