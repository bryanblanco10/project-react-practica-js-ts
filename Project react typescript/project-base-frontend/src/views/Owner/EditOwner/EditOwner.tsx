import { CardBase } from '@/components';
import { FormUpdateOwner } from '../components';

export const EditOwner = () => {
	return (
		<div className='py-5 px-3 lg:px-0'>
			<CardBase
				redirect='/propietarios'
				title='Actualizar Propietario'
				subtitle='Actualización de Propietario'
			>
				<FormUpdateOwner isDetail={false} />
			</CardBase>
		</div>
	);
};
