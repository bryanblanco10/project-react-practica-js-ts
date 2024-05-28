import { CardBase } from "@/components";
import { FormEmployee } from "../components";

export const EditEmployee = () => {
	return (
		<div className='py-5 px-3 lg:px-0'>
			<CardBase
				redirect='/empleados'
				title='Actualizar Empleado'
				subtitle='Actualización de Empleado'
			>
				<FormEmployee isDetail={false} />
			</CardBase>
		</div>
	);
};
