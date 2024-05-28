import { Module } from '@/views/Owner/hooks';
import {
	Checkbox,
	List,
	ListItem,
	ListItemPrefix,
	Typography,
} from '@material-tailwind/react';
import { useMemo, useState } from 'react';
import { UseFormSetValue } from 'react-hook-form';

interface Props {
	modules: Module[];
	label: string;
	required?: boolean;
	name: string;
	values: Module[];
	setValue: UseFormSetValue<any>;
}
export const ListCheckbox = ({
	modules,
	label,
	name,
	setValue,
	values,
}: Props) => {
	const [modules2, setModules2] = useState<Module[]>([]);

	const handleChange = (item: Module) => {
		let records: Module[] = modules2;

		const value = modules2.find((el: Module) => el?.uuid === item?.uuid);
		if (value) {
			const index = records.findIndex((el: Module) => el?.uuid == value?.uuid);
			records.splice(index, 1);
		} else {
			records = [...modules2, item];
		}

		setModules2(records);
		setValue(name, records, { shouldValidate: true });
	};

	const checkedItem = (uuid: string) => {
		let value = false;
		if (modules2.length > 0) {
			const record = modules2.find((el: Module) => el?.uuid == uuid);
			value = record ? true : false;
		}

		return value;
	};

	useMemo(() => {
		if (values.length > 0) {
			setModules2(values);
		}
	}, [values]);
	return (
		<>
			<label className='!text-base'>{label}</label>
			<List>
				{modules?.map((item: Module) => (
					<ListItem className='p-0' key={item?.uuid}>
						<label
							htmlFor={item?.uuid}
							className='flex w-full cursor-pointer items-center px-3 py-2'
						>
							<ListItemPrefix className='mr-3'>
								<Checkbox
									id={item?.uuid}
									ripple={false}
									className='hover:before:opacity-0'
									containerProps={{
										className: 'p-0',
									}}
									onChange={() => handleChange(item)}
									value={item.uuid}
									checked={checkedItem(item.uuid)}
								/>
							</ListItemPrefix>
							<Typography color='blue-gray' className='font-medium'>
								{item?.name}
							</Typography>
						</label>
					</ListItem>
				))}
			</List>
		</>
	);
};
