import {
	Card,
	CardBody,
	CardHeader,
	Typography,
} from '@material-tailwind/react';

interface Props {
	children: React.ReactElement;
	title: string;
	subtitle: string;
}
export const CardBase = ({ children, title, subtitle }: Props) => {
	return (
		<Card className='h-full w-full'>
			<CardHeader floated={false} shadow={false} className='rounded-none'>
				<div className='mb-8 flex items-center justify-between gap-8'>
					<div>
						<Typography variant='h5' color='blue-gray'>
							{title}
						</Typography>
						<Typography color='gray' className='mt-1 font-normal'>
							{subtitle}
						</Typography>
					</div>
				</div>
			</CardHeader>
			<CardBody className='overflow-auto px-2'>{children}</CardBody>
		</Card>
	);
};
