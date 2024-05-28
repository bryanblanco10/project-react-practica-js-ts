import { CardBase } from "@/components";
import { FormEmployee } from "../components";

export const CreateEmployee = () => {
	return (
		<div className='py-5 px-3 lg:px-0'>
			<CardBase
				redirect='/empleados'
				title='Crear Empleado'
				subtitle='Registro de Empleado'
			>
				<FormEmployee isDetail={false} />
			</CardBase>
		</div>
	);
};
