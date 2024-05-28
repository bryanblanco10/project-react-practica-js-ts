import { CardBase } from "@/components";
import { FormEmployee } from "../components";

export const DetailEmployee = () => {
	return (
		<div className='py-5 px-3 lg:px-0'>
			<CardBase
				redirect='/empleados'
				title='Detalle Empleado'
				subtitle='Detalles del Empleado'
			>
				<FormEmployee isDetail={true} />
			</CardBase>
		</div>
	);
};
