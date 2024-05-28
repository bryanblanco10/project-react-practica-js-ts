import { Card, CardBody, Typography } from '@material-tailwind/react';
import { Indicator } from '../../hooks';
interface Props {
	indicator: Indicator;
}
export const CardIndicator = (indicator: Props) => {
	return (
		<Card className='mt-6 w-40 md:w-48 text-center p-0'>
			<CardBody className='p-2'>
				<div className='flex justify-center mb-1'>
					{indicator.indicator.icon && <img src={indicator.indicator.icon} loading='lazy' />}
				</div>
				<Typography variant='h4' color='blue-gray'>
					{!Array.isArray(indicator.indicator.value) && indicator.indicator.value}
				</Typography>
				<Typography>{indicator.indicator.text} {indicator.indicator.date ? `${indicator.indicator.date}` : ''}</Typography>
			</CardBody>
		</Card>
	);
};