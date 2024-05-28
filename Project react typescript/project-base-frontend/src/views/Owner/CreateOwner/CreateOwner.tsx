import { CardBase } from '@/components';
import { FormOwner } from '../components';

export const CreateOwner = () => {
	return (
		<div className='py-5 px-3 lg:px-0'>
			<CardBase
				redirect='/propietarios'
				title='Crear Propietario'
				subtitle='Registro de Propietario'
			>
				<FormOwner isDetail={false} />
			</CardBase>
		</div>
	);
};
