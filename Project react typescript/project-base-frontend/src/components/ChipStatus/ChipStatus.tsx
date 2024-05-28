import { Chip } from '@material-tailwind/react';

interface Props {
	status: boolean | undefined;
	message1: string;
	message2: string;
}
export const ChipStatus = ({ status, message1, message2 }: Props) => {
	return (
		<div className='flex gap-2'>
			{status ? (
				<Chip
					variant='ghost'
					color='green'
					size='sm'
					value={message1}
					icon={
						<span className="mx-auto mt-1 block h-2 w-2 rounded-full bg-green-900 content-['']" />
					}
				/>
			) : (
				<Chip
					variant='ghost'
					color='red'
					size='sm'
					value={message2}
					icon={
						<span className="mx-auto mt-1 block h-2 w-2 rounded-full bg-red-900 content-['']" />
					}
				/>
			)}
		</div>
	);
};
