import { ArrowLongLeftIcon } from '@heroicons/react/24/outline';
import {
	Button,
	Card,
	CardBody,
	CardHeader,
	Typography,
} from '@material-tailwind/react';
import { Link } from 'react-router-dom';

interface Props {
	children: React.ReactElement;
	title: string;
	subtitle: string;
	redirect: string;
}
export const CardBase = ({ children, title, subtitle, redirect }: Props) => {
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
					<div className='flex shrink-0 flex-col gap-2 sm:flex-row'>
						<Link to={redirect}>
							<Button className='flex items-center gap-2' size='sm'>
								<ArrowLongLeftIcon strokeWidth={2} className='h-4 w-4' /> Atrás
							</Button>
						</Link>
					</div>
				</div>
			</CardHeader>
			<CardBody className='px-2'>{children}</CardBody>
		</Card>
	);
};
