import { Select, Option } from '@material-tailwind/react';

export const SelectMunicipality = () => {
	return (
		<div className='w-72'>
			<Select
				label='Municipio'
				animate={{
					mount: { y: 0 },
					unmount: { y: 25 },
				}}
			>
				<Option value='Medellin'>Medellin</Option>
				<Option value='Envigado'>Envigado</Option>
				<Option value='Itagui'>Itaguí</Option>
				<Option value='Sincelejo'>Sincelejo</Option>
				<Option value='Tolú'>Tolú</Option>
			</Select>
		</div>
	);
};
